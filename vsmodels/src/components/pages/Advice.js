import React from "react";
import { Link, Route } from "react-router-dom";
import Fashion from "./Fashion";
import Boys from "./Boys";
import '../style.css';

const Advice = props =>
  <div>
    <Link to={`${props.match.url}/fashion`} className="btn btn-default">
    Learn More
    </Link>{" "}
    <Link to={`${props.match.url}/boys`} className="btn btn-default">
    Learn More
    </Link>{" "}
    <Route exact path={`${props.match.url}/fashion`} component={Fashion} />
    <Route exact path={`${props.match.url}/boys`} component={Boys} />
  </div>;

export default Advice;