import React from "react";
import "../css/main.css";

function MyApp({ Component, ...appProps }) {
  return (
    <>
      <div className="header">
        <h1 className="title">This is Teste API</h1>
      </div>
      <Component {...appProps} />
    </>
  );
}

export default MyApp;
