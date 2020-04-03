import React from "react";


function Card(props) {
  console.log(props)
  return (
    <div className="card text-center">
    <a href={props.link} target="_blank" rel="noopener noreferrer">
    <img src={props.img} alt={props.img} width="300" height="300"></img>
    <h3 className="titles">{props.heading}</h3></a>
    <a href={props.github} target="_blank" rel="noopener noreferrer">Link to the github repo</a>
    </div>  
  );
}

export default Card;
