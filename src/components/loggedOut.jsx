import React from "react";

const LoggedOut = () => {
  const headstyle = {
    backgroundColor: "blue",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "whiteSmoke",
    borderRadius: "10px",
    fontweight: "800",
  };
  return (
    <>
      <h1 style={headstyle}>You Logged Out🤷‍♀️🤷‍♀️</h1>
    </>
  );
};

export default LoggedOut;
