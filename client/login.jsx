const helper = require("./helper");
const React = require("react");
const { createRoot } = require("react-dom/client");

const handleLogin = (e) => {
  e.preventDefault();
  helper.hideError();

  const username = e.target.querySelector("#user").value;
  const pass = e.target.querySelector("#pass").value;

  if (!username || !pass) {
    helper.handleError("Username and password are required");
    return false;
  }

  helper.sendPost(e.target.action, { username, pass });
  return false;
};

const handleSignup = (e) => {
  e.preventDefault();
  helper.hideError();

  const username = e.target.querySelector("#user").value;
  const pass = e.target.querySelector("#pass").value;
  const pass2 = e.target.querySelector("#pass2").value;

  if (!username || !pass || !pass2) {
    helper.handleError("Username and password are required");
    return false;
  }

  if (pass !== pass2) {
    helper.handleError("Passwords do not match");
    return false;
  }

  helper.sendPost(e.target.action, { username, pass, pass2 });
  return false;
};

const LoginWindow = (props) => {
  return (
    <form
      id="loginForm"
      name="loginForm"
      onSubmit={handleLogin}
      action="/login"
      method="POST"
      className="mainForm"
    >
      <label htmlFor="username">Username: </label>
      <input type="text" id="user" name="username" placeholder="username" />
      <label htmlFor="password">Password: </label>
      <input type="text" id="pass" name="pass" placeholder="password" />
      <input className="formSubmit" type="submit" value="Sign In" />
    </form>
  );
};

const SignupWindow = (props) => {
  return (
    <form
      id="signupForm"
      name="signupForm"
      onSubmit={handleSignup}
      action="/signup"
      method="POST"
      className="mainForm"
    >
      <label htmlFor="username">Username: </label>
      <input type="text" id="user" name="username" placeholder="username" />
      <label htmlFor="pass">Password: </label>
      <input type="text" id="pass" name="pass" placeholder="password" />
      <label htmlFor="pass">Password: </label>
      <input type="text" id="pass2" name="pass2" placeholder="retype password" />
      <input className="formSubmit" type="submit" value="Sign In" />
    </form>
  );
};

const DomoList = () => {
  const [domos, setDomos] = React.useState([]);

  React.useEffect(() => {
    const loadDomosFromServer = async () => {
      const res = await fetch("/getAllPublicDomos");
      const data = await res.json();
      setDomos(data.domos);
    };
    loadDomosFromServer();
  }, []);

  if (domos.length === 0) {
    return <div>No domos are made public yet!</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ marginBlockStart: "0px", marginBlockEnd: "0px" }}>Public Domos:</h3>
      <ul
        className="domoList"
        style={{
          marginBlockStart: "0px",
          marginBlockEnd: "0px",
          listStyleType: "none",
          paddingInlineStart: "10px",
        }}
      >
        {[...domos]
          .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
          .map((domo) => (
            <DomoCard key={domo._id} domo={domo} />
          ))}
      </ul>
    </div>
  );
};

const DomoCard = ({ domo }) => {
  const [owner, setOwner] = React.useState(null);

  React.useEffect(() => {
    const loadOwnerFromServer = async () => {
      const res = await fetch(`/getOwnerName/${domo.owner}`);
      const data = await res.json();
      setOwner(data.owner);
    };
    loadOwnerFromServer();
  }, [domo]);

  return (
    <li
      key={domo._id}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <img
        src="/assets/img/domoface.jpeg"
        alt="domo face"
        style={{ width: "25px", height: "25px", borderRadius: "4px" }}
      />
      <p style={{ marginBlockStart: "0px", marginBlockEnd: "0px" }}>
        {domo.name} is {domo.age} years old, created by {owner} on{" "}
        {new Date(domo.createdDate).toLocaleDateString()}
      </p>
    </li>
  );
};

const App = ({ auth }) => {
  return (
    <React.Fragment>
      {auth === "login" ? <LoginWindow /> : <SignupWindow />}
      <DomoList />
    </React.Fragment>
  );
};

const init = () => {
  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton");

  const root = createRoot(document.getElementById("content"));

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    root.render(<App auth="login" />);
    return false;
  });

  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    root.render(<App auth="signup" />);
    return false;
  });

  root.render(<App auth="login" />);
};

window.onload = init;
