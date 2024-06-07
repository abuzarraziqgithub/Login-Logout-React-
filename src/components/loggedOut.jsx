import React from "react";

const LoggedOut = () => {
  const headstyle = {
    backgroundColor: "orangered",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "whiteSmoke",
    borderRadius: "10px",
  };
  return (
    <>
      <h1 style={headstyle}>Please sign in</h1>
    </>
  );
};

export default LoggedOut;
