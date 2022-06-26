import React from "react";
import ReactDOM from "react-dom/client";

import state from "./redux/state";
import App from "./App";

import "./scss/Globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);
