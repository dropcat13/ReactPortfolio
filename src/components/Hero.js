import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center">
      {props.children}
      <h2>Catherine Kretzschmar</h2>
      <h3>{}</h3>
    </div>
  );
}

export default Hero;
