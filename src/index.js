import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <h1>movie list</h1>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
