const helper = require("./helper");
const React = require("react");
const { createRoot } = require("react-dom/client");

const handleDomo = (e, onDomoAdded) => {
  e.preventDefault();
  helper.hideError();

  const name = e.target.querySelector("#domoName").value;
  const age = e.target.querySelector("#domoAge").value;
  
  if (!name || !age) {
    helper.handleError("Both name and age are required");
    return false;
  }

  helper.sendPost(e.target.action, { name, age }, onDomoAdded);
  return false;
}

const DomoForm = (props) => {
  return (
    <form id="domoForm"
      onSubmit={(e) => handleDomo(e, props.triggerReload)}
      name="domoForm"
      action="/maker"
      method="POST"
      className="domoForm"
    >
      <label htmlFor="name">Name: </label>
      <input type="text" id="domoName" name="name" placeholder="Domo Name" />
      <label htmlFor="age">Age: </label>
      <input type="number" id="domoAge" name='age' min='0' />
      <input className='makeDomoSubmit' type='submit' value="Make Domo" />
    </form>
  )
}

const DomoList = (props) => {
  const [domos, setDomos] = React.useState(props.domos);

  React.useEffect(() => {
    const loadDomosFromServer = async () => {
      const res = await fetch("/getDomos");
      const data = await res.json();
      setDomos(data.domos);
    };
    loadDomosFromServer();
  }, [props.domos]);

  if (domos.length === 0) {
    return (
      <div className="domoList">
        <h3 className="emptyDomo">No Domos yet!</h3>
      </div>
    )
  }

  return (
    <div className="domoList">
      {domos.map((domo) => (
        <div key={domo._id} className="domo">
          <img src="/assets/img/domoface.jpeg" alt="domo face" className="domoFace" />
          <h3 className="domoName">Name: {domo.name}</h3>
          <h3 className="domoAge">Age: {domo.age}</h3>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const [reloadDomos, setReloadDomos] = React.useState(false);

  return (
    <div>
      <div id="makeDomo">
        <DomoForm triggerReload={() => setReloadDomos(!reloadDomos)} />
      </div>
      <div id="domos">
        <DomoList domos={[]} reloadDomos={reloadDomos} />
      </div>
    </div>
  )
}

const init = () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
};

window.onload = init;