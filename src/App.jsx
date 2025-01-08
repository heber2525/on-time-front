import "./App.css";
import { Login } from "./auth/login";
import { Register } from "./auth/register";

function App() {
  return (
    <>
      <h1>On Time</h1>
      <Login />
      <Register />
    </>
  );
}

export default App;
