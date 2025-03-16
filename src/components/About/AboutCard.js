import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <span className="purple">Rohit Kumar Sinha</span>, a Software Engineer passionate about building modern web applications.
            <br />
            <br />
            I specialize in <b className="purple">React, Node.js, and AWS</b>, crafting scalable and efficient solutions.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Create. Innovate. Turning ideas into reality one function at a time!"
          </p>
          <footer className="blockquote-footer">Rohit Kumar Sinha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
