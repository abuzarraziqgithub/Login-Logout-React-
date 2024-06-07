import { useState } from "react";
import React from "react";
import "./App.css";
import Loginpage from "./components/login-page";
import LoggedOut from "./components/loggedOut";
function App() {
  const headstyle = {
    backgroundColor: "orangered",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "whiteSmoke",
    borderRadius: "10px",
  };
  const heading = <h1 style={headstyle}>Please sign in</h1>;
  const [logState, setLogState] = useState(heading);

  const buttonStyle = {
    margin: "20px",
    width: "100px",
    height: "35px",
    borderRadius: "5px",
    border: "0.2px solid black",
    fontWeight: "700",
  };
  function loginHandler() {
    setLogState(<Loginpage />);
  }
  function signUpHandler() {
    setLogState(<LoggedOut />);
  }
  return (
    <>
      {logState}
      <button style={buttonStyle} onClick={loginHandler}>
        Sign In
      </button>
      <button style={buttonStyle} onClick={signUpHandler}>
        Sign Up
      </button>
    </>
  );
}

export default App;
