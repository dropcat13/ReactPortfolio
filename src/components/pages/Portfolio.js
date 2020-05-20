import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import "../style.css";
import content from "./content.json";
import group from "./group.json";
import { Link, useLocation } from "react-router-dom";

function Portfolio() {
  const location = useLocation();

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Portfolio</h3> 
          </Col>
        </Row>
        <Row>
          {content.map(project1 => ( <Card key={project1.name} link={project1.link}
          img={project1.img} heading={project1.heading} github={project1.github}/>))}
        </Row>
        <Row>
          <h4>Group Projects</h4>
        </Row>  
        <Row>
        {group.map(project1 => ( <Card key={project1.name} link={project1.link}
          img={project1.img} heading={project1.heading} github={project1.github}/>))} 
        </Row>                    
        <Row>
          <h4>Command Line Projects</h4>
        </Row>  
        <Row>
          <Col size="md-6">
            <Link
              to="/clipage"
              className={location.pathname === "/clipage" ? "nav-link active" : "nav-link"}>
              <img src={process.env.PUBLIC_URL +"/images/cli.jpg"}  alt="CLI" width="300" height="300"></img>
              <h3 class="titles">CLI Projects</h3>
            </Link>
          </Col>
        </Row>       
      </Container>
    </div>
  );
}

export default Portfolio;