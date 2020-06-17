import React, {useState} from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import "../style.css";
import cli from "../components/pages/cli.json";
import { Link, useLocation } from "react-router-dom";

function CLIProjects() {
    const location = useLocation();
    const [isShown, setIsShown] = useState(false);
    
    return (
        <div>
            <Container>
            <Row>
                <Col size="md-12">
                    <h3>Command Line Projects</h3> 
                </Col>
            </Row>
            <Row>
                {cli.map(project1 => ( <Card key={project1.name} link={project1.link}
                img={project1.img} heading={project1.heading} github={project1.github}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}/>))} 
            </Row>  

        </Container>
        </div>
    );
}

export default CLIProjects;