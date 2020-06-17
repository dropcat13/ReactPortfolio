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
          <a href="https://www.linkedin.com/in/catherinekretzschmar/" target="_blank" rel="noopener noreferrer">
            <img src="../public/linkedIn.png" alt="linked in thumbnail"></img>
          </a>
          <a href="https://github.com/dropcat13" target="_blank" rel="noopener noreferrer">
            <img src="../public/linkedIn.png" alt="github thumbnail"></img>
          </a> 
          <h5>email: cat.ktz@gmail.com</h5>
        </div>
      </div>
      <h3></h3>
    </div>
  );
}

export default Hero;
