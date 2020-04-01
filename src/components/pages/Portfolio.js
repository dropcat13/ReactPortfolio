import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio() {
  return (
    <div>
      <Hero />
      <Navtabs />
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
                <img src="./assets/images/passwordGen.jpg" alt="Hangman Image" width="300" height="300"></img>
                <h3 class="titles">Password Generator</h3>   
            </Card>
          </Col>
          <Col size="md-6">
            <Card>
                <a href="../homework4-codequiz/index.html"></a>
                <img src="./assets/images/quiz.jpg" alt="RPG Image" width="300" height="300"></img>
                <h3 class="titles">Code Quiz</h3>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <Card>
                    <a href="../homework5-dayplanner/index.html"></a>
                    <img src="./assets/images/planner.jpeg"  alt="Trivia Image" width="300" height="300"></img>
                    <h3 class="titles">Dayplanner</h3>
                </Card>
            </Col>
            <Col size="md-6">
                <Card>
                    <a href="../homework6-weatherDashboard/index.html"></a>
                    <img src="./assets/images/weather.jpeg" alt="Cell Phone Image" width="300" height="300"></img>
                    <h3 class="titles">Weather Dashboard</h3>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <Card>
                    <a href="../homework5-dayplanner/index.html">
                    <img src="./assets/images/notes.jpeg"  alt="Trivia Image" width="300" height="300"></img>
                    <h3 class="titles">Express NoteTaker</h3> 
                </Card>
            </Col>
            <Col size="md-6">
                <Card>
                    
                </Card>
            </Col>
        </Row>     
                        
                    <a href="../homework6-weatherDashboard/index.html">
                        <div class="col-lg-6">
                            <img src="./assets/images/burger.jpeg" alt="Cell Phone Image" width="300" height="300">
                            <h3 class="titles">Eat-Da-Burger</h3>
                    <h4>Group Projects</h4>

                <div class="row">
                    <a href="https://sjmarsnc.github.io/Project-What-To-Do/">
                        <div class="col-lg-6">
                            <img src="./assets/images/Hiking.jpg"  alt="Hiking Image" width="300" height="300">
                            <h3 class="titles">Traliz - Get out and about!</h3>
                    <a href=" https://fairytale-audio-tours.herokuapp.com/">
                        <div class="col-lg-6">
                            <img src="../homework2-bootstrap/assets/images/rutgerscellphone.jpeg" alt="Cell Phone Image" width="300" height="300">
                            <h3 class="titles">FairyTale Audio Tours</h3>
                <div class="row">
                    <h4>Command Line Projects</h4>
                </div>

                <div class="row">
                    <a href="CLIProjects.html">
                        <div class="col-lg-6">
                            <img src="./assets/images/cli.jpg"  alt="CLI Image" width="300" height="300">
                            <h3 class="titles">CLI Projects</h3>
            <CLIProjects />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;