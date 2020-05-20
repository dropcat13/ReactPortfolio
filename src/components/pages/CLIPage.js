import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import cli from "./cli.json";

function CLIPage() {

    return (
        <div>
            <Container style={{ marginTop: 30}}>
                <Row>
                    <Col size="md-12">
                        <h3>Command Line projects</h3>
                    </Col>
                </Row>
                <Row>
                    {cli.map(project1 => ( <Card key={project1.name}
                    img={project1.img} heading={project1.heading} github={project1.github}/>))} 
                </Row>  
            </Container>
        </div>
    );
}

export default CLIPage;