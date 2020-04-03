import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import "../style.css";
import content from "./content.json";

function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Portfolio</h3> 
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
          {content.map(project1 => ( <Card key={project1.name} link={project1.link}
          img={project1.img} heading={project1.heading} github={project1.github}/>))}
          </Col>
        </Row>
        <Row>
          <h4>Group Projects</h4>
        </Row>  
        <Row>
            <Col size="md-6">
                  <a href="https://sjmarsnc.github.io/Project-What-To-Do/"></a>
                  <img src={process.env.PUBLIC_URL +"/images/Hiking.jpg"}  alt="Hiking" width="300" height="300"></img>
                  <h3 class="titles">Traliz - Get out and about!</h3>
            </Col>
            <Col size="md-6">
                  <a href=" https://fairytale-audio-tours.herokuapp.com/"></a>
                  <img src={process.env.PUBLIC_URL +"/images/fairytaleaudio.png"} alt="Cell Phone" width="300" height="300"></img>
                  <h3 class="titles">FairyTale Audio Tours</h3>
            </Col>
        </Row>                    
        <Row>
          <h4>Command Line Projects</h4>
        </Row>  
        <Row>
            {/* Make this a proper link to a react CLI page */}
            {/* <a href="CLIProjects.html"></a>
            <img src={process.env.PUBLIC_URL +"/images/cli.jpg"}  alt="CLI" width="300" height="300"></img>
            <h3 class="titles">CLI Projects</h3> */}
        </Row>       
      </Container>
    </div>
  );
}

export default Portfolio;