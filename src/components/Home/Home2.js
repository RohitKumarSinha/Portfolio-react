import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { PiMediumLogoFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm Rohit Kumar Sinha, a software engineer with more than
              <b className="purple"> 2 years </b> of experience in
              <b className="purple"> React </b> and <b className="purple"> Node.js </b> using TypeScript.
              <br />
              <br />I have strong skills in
              <i>
                <b className="purple"> JavaScript, TypeScript, and Python </b>
              </i>
              and enjoy building fast and scaleable web applications.
              <br />
              <br />
              I also work with
              <i>
                <b className="purple"> AWS services </b>
              </i>
              to make applications scalable and reliable.
              <br />
              <br />
              I love learning new things and solving problems. My goal is to
              <b className="purple"> build scalable and effective solutions </b>
              that make a real impact in the digital world.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple"> connect </span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RohitKumarSinha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-sinha-115a92189/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@sinharohit3333"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <PiMediumLogoFill />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
