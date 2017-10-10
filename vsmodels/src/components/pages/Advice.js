import React from "react";
import { Link, Route } from "react-router-dom";
import Fashion from "./Fashion";
import Boys from "./Boys";
import '../style.css';

const Advice = props =>
  <div>
    <div class="adviceIntro">
      Welcome Readers! 
      <br/>
      There are two buttons that leads you to the 'Fashion' page and the 'Boys' Page. 
    </div>
    <div className="boysbutton">
      <Link to={`${props.match.url}/boys`} className="btn btn-default">
      Boy Advice
      </Link>{" "}
    </div>
    <Route exact path={`${props.match.url}/boys`} component={Boys} />
    <br/><br/><br/>
    <div className="fashionbutton">
      <Link to={`${props.match.url}/fashion`} className="btn btn-default">
      Fashion Advice
      </Link>{" "}
    </div>
    <Route exact path={`${props.match.url}/fashion`} component={Fashion} />
  </div>;

export default Advice;