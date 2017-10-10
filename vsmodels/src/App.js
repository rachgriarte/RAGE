import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import Advice from "./components/pages/Advice.js";

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route path="/advice" component={Advice} />
    </div>
  </Router>;

export default App;
