export default function App() {
  const username = window.location.pathname.split("/").pop();
  console.log(username);
  return <div>App rendering for username: {username}</div>;
}
