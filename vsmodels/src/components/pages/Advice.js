import React from "react";
import { Link, Route } from "react-router-dom";
import Fashion from "./Fashion";
import Boys from "./Boys";
import '../style.css';

const Advice = props =>
  <div>
    <div className="fashionbutton">
      <Link to={`${props.match.url}/fashion`} className="btn btn-default">
      Fashion Advice
      </Link>{" "}
    </div>
    <Route exact path={`${props.match.url}/fashion`} component={Fashion} />
    <div className="boysbutton">
      <Link to={`${props.match.url}/boys`} className="btn btn-default">
      Boy Advice
      </Link>{" "}
    </div>
    <Route exact path={`${props.match.url}/boys`} component={Boys} />
  </div>;

export default Advice;