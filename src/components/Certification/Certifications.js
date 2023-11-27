import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCards from "./CertificationCards";
import Particle from "../Particle";
import GoogleCloudBigData from "../../Assets/Certificates/GoogleCloud_Certificate.jpg";
import CoadingNinjaDataStructure from "../../Assets/Certificates/DataStructure_Certificate.jpg";
import CoadingNinjaCplusplus from "../../Assets/Certificates/CPlusPlus_Certificate.jpg";



function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my few Certificate Which I done Recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={GoogleCloudBigData}
              isBlog={false}
              title="Google Cloud Big Data and Machine Learning Fundamentals"
              description="
              The course spanned Google Cloud's data-to-AI journey, emphasizing infrastructure layers, BigQuery analytics, diverse ML model creation methods, and Vertex AI's unified platform. In this course I learned about streaming data engineering, varied ML deployment choices, and a structured ML workflow."
              demoLink="https://coursera.org/share/8183da19b56fea0c26e8251c9c3316d9"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={CoadingNinjaDataStructure}
              isBlog={false}
              title="Data Structures In C++"
              description="
              In this Coding Ninjas' C++ data structures course I learn about arrays, linked lists, stacks, queues, trees, heaps, and graphs. Through practical exercises and problem-solving, I learn implementation, algorithms, and C++ features. Emphasizing hands-on learning, I ensures a solid understanding of data structures' application in C++ programming."
              demoLink="https://certificate.codingninjas.com/verify/74490f29db6c077b"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={CoadingNinjaCplusplus}
              isBlog={false}
              title="Introduction to C++"
              description="In Coding Ninjas' C++ course, You'll I learned about c++ syntax, oops concept, make some fun project in c++, know how C++ work under the hood"
              demoLink="https://certificate.codingninjas.com/verify/189721dfdc042641"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
