import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">RAGE</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/advice">Advice</Link>
    </li>
  </ul>;

export default Navpills;
