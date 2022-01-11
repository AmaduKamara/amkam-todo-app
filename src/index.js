import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import "./functionBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
