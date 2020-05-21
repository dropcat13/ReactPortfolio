import React from "react";
import Hero from "../Hero";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "../style.css";

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Contact Me</h3> 
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <form action="action_page.php">
            <label for="name">Name</label>
          </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <input type="text" id="name" name="name" placeholder="Your name.." />
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <label for="email">Email</label>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <input type="text" id="email" name="email" placeholder="Your email.." />
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
            <label for="message">Message</label>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <textarea id="message" name="message" placeholder="Write something.."></textarea>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;