import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Banner from "./Banner";

const App = () => (
  <div className="container">
    <Banner />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
