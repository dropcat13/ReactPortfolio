import React, {useState} from "react";
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
  const [isShown, setIsShown] = useState(false);

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
          img={project1.img} heading={project1.heading} github={project1.github} overview={project1.overview} tech={project1.tech}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}/>))}
          {isShown && (
            <div>
              I'll appear when you hover over the button.
            </div>
          )}
        </Row>
        <Row>
          <h4>Group Projects</h4>
        </Row>  
        <Row>
        {group.map(project1 => ( <Card key={project1.name} link={project1.link}
          img={project1.img} heading={project1.heading} github={project1.github}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}/>))} 
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
              <h3 className="titles">CLI Projects</h3>
            </Link>
          </Col>
        </Row>       
      </Container>
    </div>
  );
}

export default Portfolio;