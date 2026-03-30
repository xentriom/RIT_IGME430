import Web from "./Web";
import Profile from "./Profile";
import Chat from "./Chat";
import Auth from "./Auth";
import App from "./App";

export default function Root() {
  const root = document.getElementById("root")!;
  const page = root.getAttribute("data-page");
  const uid = root.getAttribute("data-uid");

  switch (page) {
    case "app":
      return <App />;
    case "profile":
      return <Profile uid={uid} />;
    case "chat":
      return <Chat uid={uid} />;
    case "auth":
      return <Auth />;
    default:
      return <Web />;
  }
}
