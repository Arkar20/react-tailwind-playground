import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";
import LivePortal from "./components/LivePortal";
import WorkContainer from "./components/WorkContainer";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AutosuggestComponent from "./components/AutoSuggestComponent";
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/liveportal" component={LivePortal} />
          <Route path="/workcontainer" component={WorkContainer} />
          <Route path="/autosuggest" component={AutosuggestComponent} />
        </Switch>
      </div>
    </Router>
  );
}
