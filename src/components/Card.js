import React, { useState} from "react";


function Card(props) {
  const [isShown, setIsShown] = useState(false);
  console.log(props)
  return (
    <div className="card text-center" onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
    <img src={props.img} alt={props.img} width="300" height="300"></img>
    <h3 className="titles">{props.heading}</h3></a>
    <p className="moreDetails">More Details</p>
    {isShown && (
      <div>
       <a href={props.github} target="_blank" rel="noopener noreferrer">Link to the github repo</a>
       <br></br>
       <p className="orangeText">Overview:</p>
       <p className="cardText">{props.overview}</p>
       <p className="orangeText">Technologies Used:</p>
       <p className="cardText">{props.tech}</p>
      </div>
    )}
    </div>  
  );
}

export default Card;
