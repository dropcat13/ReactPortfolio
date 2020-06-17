import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "../style.css";

function Home() {
  return (
  <div>           
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>About Me</h3> 
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <img id="catPhoto" src={process.env.PUBLIC_URL + "/images/CatPhoto.jpg"} alt="Catherine" width="400" height="350"></img>
          </Col>
          <Col size="md-2">
          </Col>
          <Col size="md-6">
            <br></br>
            <p>Front-End / Full-StackWeb Developer with a background as a classical musician and music teacher. Recently earned a certificate in Full Stack Development from the University of North Carolina, where I learnt JavaScript, CSS, HTML, Node.js, Express and  React.js, and responsive web design on the front end. I also have an understanding of mySQL, MongoDB postman and using the MVC model. Outside of the course I have dabbled in Java and have a basic understanding of virtualization, docker and containers. 
            My adept problem solving abilities, determination and ability to learn new technologies quickly, along with my personal experience working in the education sector allow me to achieve well in new situations. 
            I applied aspects of agile development in a recent project where I worked in a team of four  to develop a single-page MERN app that allowed users to take part in a quiz among friends in real time online from different locations. I am excited for the next stage in my career as I improve as a web-developer.
            </p>
              {/* <p id="bio">My name is Catherine, friends and family call me Cat, but never Cathy! I come from Norwich, Norfolk, UK which is about 2 hours east of London (in the bumpy bit on the right hand side). It's a really nice place with Medieval and Norman buildings. The surrounding area is very flat and very rural, but has lots of beaches. I studied bassoon and baroque bassoon at the Royal Northern College of Music and then spent some time working as a freelance bassoonist and teaching. Now I live in the USA because of my husband's job moving us here. I'm still teaching music but I'm ready to try something new!</p> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Technologies and skills</h3>
          </Col>
        </Row>
        <Row>
          <ul>
            <li>React</li>
            <li>HTML5 and ES6</li>
            <li>CSS3</li>
            <li>Javascript and JQuery</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL and sequelize</li>
            <li>MongoDB and Mongoose</li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default Home;