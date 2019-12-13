import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./components/scss/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./components/pages/Dashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
