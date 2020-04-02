import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero">
      {props.children}
      <h2 className="catName">Catherine Kretzschmar</h2>
      <h3>{}</h3>
    </div>
  );
}

export default Hero;
