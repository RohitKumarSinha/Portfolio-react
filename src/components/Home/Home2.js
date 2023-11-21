import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { PiMediumLogoFill } from "react-icons/pi";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>https://medium.com/@sinharohit3333
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                Hey there! I'm Rohit Kumar Sinha, a software engineer working at <b className="purple">Josh software</b> diving into clouds, data engineering, React, and even testing for a while 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, Python. </b>
              </i>
              <br />
              <br />
              My portfolio's a peek into my tech adventures &nbsp;
              <i>
                <b className="purple">where challenges met innovation, and each project fueled my passion 
                </b>
                &nbsp; for pushing tech boundaries. 
              </i>
              <br />
              <br />
              Exploring the endless possibilities of technology fuels my passion driving me to
              with <b className="purple">innovate and create solutions</b> that make a
              <i>
                <b className="purple">
                  {" "}
                   meaningful impact
                </b>
              </i>
              &nbsp; in the digital world.
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RohitKumarSinha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-sinha-115a92189/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <i class="fa-brands fa-medium"></i> */}
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
