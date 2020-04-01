import React from "react";
import Hero from "../Hero";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Navtabs from "./Navtabs";
import "../style.css";

function Home() {
  return (
    <div>
      <Hero />
      <Navtabs />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>About Me</h3> 
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <img src="./assets/images/CatPhoto" alt="Catherine" width="400" height="350"></img>
          </Col>
          <Col size="md-8">
              <p id="bio">My name is Catherine, friends and family call me Cat, but never Cathy! I come from Norwich, Norfolk, UK which is about 2 hours east of London (in the bumpy bit on the right hand side). It's a really nice place with medieval and Norman buildings. The surrounding area is very flat and very rural, but has lots of beaches. I studied bassoon and baroque bassoon at the Royal Northern College of Music and then spent some time working as a freelance bassoonist and teaching. Now I live in the USA because of my husband's job moving us here. I'm still teaching music but I'm ready to try something new!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;