import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Routes,
  // etc.
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Action from "./components/Action";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route name="Home" exact path="/" element={<App />} />
      <Route name="Action" path="/action" element={<Action />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
