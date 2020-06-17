import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-md-6">
            <h2 className="catName">Catherine Kretzschmar</h2>
        </div>
        <div className="col-md-6">
            <img src="../public/linkedIn.png" alt="linked in thumbnail"></img>
            <h5>https://www.linkedin.com/in/catherinekretzschmar/</h5>
            <img src="../public/linkedIn.png" alt="github thumbnail"></img>
            <h5>https://github.com/dropcat13</h5>
            <img src="../../public/email-icon" alt="email thumbnail"></img>
            <h5>cat.ktz@gmail.com</h5>
        </div>
      </div>
      <h3></h3>
    </div>
  );
}

export default Hero;
