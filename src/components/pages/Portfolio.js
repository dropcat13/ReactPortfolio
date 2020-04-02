import React from "react";
import Hero from "../Hero";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import "../style.css";

function Portfolio() {
  return (
    <div>
      <Hero />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Portfolio</h3> 
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card>
              <a href="../homework3-passwordgen/index.html"></a>
              <img src="./assets/images/passwordGen.jpg" alt="Hangman" width="300" height="300"></img>
              <h3 class="titles">Password Generator</h3>   
            </Card>
          </Col>
          <Col size="md-6">
            <Card>
              <a href="../homework4-codequiz/index.html"></a>
              <img src="./assets/images/quiz.jpg" alt="RPG" width="300" height="300"></img>
              <h3 class="titles">Code Quiz</h3>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card>
              <a href="../homework5-dayplanner/index.html"></a>
              <img src="./assets/images/planner.jpeg"  alt="Trivia" width="300" height="300"></img>
              <h3 class="titles">Dayplanner</h3>
            </Card>
          </Col>
            <Col size="md-6">
                <Card>
                    <a href="../homework6-weatherDashboard/index.html"></a>
                    <img src="./assets/images/weather.jpeg" alt="Weather" width="300" height="300"></img>
                    <h3 class="titles">Weather Dashboard</h3>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <Card>
                  <a href="../homework5-dayplanner/index.html"></a>
                  <img src="./assets/images/notes.jpeg"  alt="Dayplanner" width="300" height="300"></img>
                  <h3 class="titles">Express NoteTaker</h3> 
                </Card>
            </Col>
            <Col size="md-6">
                <Card>
                  <a href="../homework6-weatherDashboard/index.html"></a>
                  <img src="./assets/images/burger.jpeg" alt="Weather" width="300" height="300"></img>
                  <h3 class="titles">Eat-Da-Burger</h3>
                </Card>
            </Col>
        </Row>   
        <Row>
          <h4>Group Projects</h4>
        </Row>  
        <Row>
            <Col size="md-6">
                <Card>
                  <a href="https://sjmarsnc.github.io/Project-What-To-Do/"></a>
                  <img src="./assets/images/Hiking.jpg"  alt="Hiking" width="300" height="300"></img>
                  <h3 class="titles">Traliz - Get out and about!</h3>
                </Card>
            </Col>
            <Col size="md-6">
                <Card>
                  <a href=" https://fairytale-audio-tours.herokuapp.com/"></a>
                  <img src="../homework2-bootstrap/assets/images/rutgerscellphone.jpeg" alt="Cell Phone" width="300" height="300"></img>
                  <h3 class="titles">FairyTale Audio Tours</h3>
                </Card>
            </Col>
        </Row>                    
        <Row>
          <h4>Command Line Projects</h4>
        </Row>  
        <Row>
          <Card>
            {/* Make this a proper link to a react CLI page */}
            <a href="CLIProjects.html"></a>
            <img src="./assets/images/cli.jpg"  alt="CLI" width="300" height="300"></img>
            <h3 class="titles">CLI Projects</h3>
          </Card>
        </Row>       
      </Container>
    </div>
  );
}

export default Portfolio;