import React from "react";
import "./style.css";

function Banner(props) {
  return <h1 className="navBar">{props.children}</h1>;
}

export default Banner;
