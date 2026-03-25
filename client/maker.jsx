const helper = require("./helper");
const React = require("react");
const { createRoot } = require("react-dom/client");

const handleDomo = (e, onDomoAdded) => {
  e.preventDefault();
  helper.hideError();

  const name = e.target.querySelector("#domoName").value;
  const age = e.target.querySelector("#domoAge").value;
  const isPublic = e.target.querySelector("#isPublic").value === "true";

  if (!name || !age) {
    helper.handleError("Both name and age are required");
    return false;
  }

  helper.sendPost(e.target.action, { name, age, isPublic }, onDomoAdded);
  return false;
};

const updateDomoVisibility = (e, onDomoUpdated) => {
  e.preventDefault();
  helper.hideError();

  const id = e.target.querySelector("#_id").value;
  const isPublic = e.target.querySelector("#isPublic").value === "true";

  helper.sendPost(e.target.action, { _id: id, isPublic: !isPublic }, onDomoUpdated);
  return false;
};

const DomoForm = (props) => {
  return (
    <form
      id="domoForm"
      onSubmit={(e) => handleDomo(e, props.triggerReload)}
      name="domoForm"
      action="/maker"
      method="POST"
      className="domoForm"
    >
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="domoName" name="name" placeholder="Domo Name" />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input type="number" id="domoAge" name="age" min="0" />
      </div>
      <div>
        <label htmlFor="isPublic">Visibility: </label>
        <select id="isPublic" name="isPublic">
          <option value="true">Public</option>
          <option value="false">Private</option>
        </select>
      </div>
      <input className="makeDomoSubmit" type="submit" value="Make Domo" />
    </form>
  );
};

const DomoList = (props) => {
  const [domos, setDomos] = React.useState(props.domos);

  React.useEffect(() => {
    const loadDomosFromServer = async () => {
      const res = await fetch("/getDomos");
      const data = await res.json();
      setDomos(data.domos);
    };
    loadDomosFromServer();
  }, [props.reloadDomos]);

  if (domos.length === 0) {
    return (
      <div className="domoList">
        <h3 className="emptyDomo">No Domos yet!</h3>
      </div>
    );
  }

  return (
    <div className="domoList">
      {domos.map((domo) => (
        <form
          key={domo._id}
          onSubmit={(e) => updateDomoVisibility(e, props.triggerReload)}
          name="visibilityForm"
          action="/updateDomoVisibility"
          method="POST"
          className="domo"
        >
          {/* Hidden inputs to send the id and isPublic to the server */}
          <input type="hidden" id="_id" value={domo._id} />
          <input type="hidden" id="isPublic" value={domo.isPublic} />

          <img src="/assets/img/domoface.jpeg" alt="domo face" className="domoFace" />
          <h3 className="domoName">Name: {domo.name}</h3>
          <h3 className="domoAge">Age: {domo.age}</h3>
          <input type="submit" value={`Make ${domo.isPublic ? "Private" : "Public"}`} />
        </form>
      ))}
    </div>
  );
};

const App = () => {
  const [reloadDomos, setReloadDomos] = React.useState(false);
  const triggerReload = () => setReloadDomos(!reloadDomos);

  return (
    <div>
      <div id="makeDomo">
        <DomoForm triggerReload={triggerReload} />
      </div>
      <div id="domos">
        <DomoList domos={[]} reloadDomos={reloadDomos} triggerReload={triggerReload} />
      </div>
    </div>
  );
};

const init = () => {
  const root = createRoot(document.getElementById("app"));
  root.render(<App />);
};

window.onload = init;
