import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCards from "./CertificationCards";
import Particle from "../Particle";
import GoogleCloudBigData from "../../Assets/Certificates/GoogleCloud_Certificate.jpg";
import CoadingNinjaDataStructure from "../../Assets/Certificates/DataStructure_Certificate.jpg";
import IBM_ETL_DataPipeline from "../../Assets/Certificates/IBM_ETL_DataPipeline.jpg";



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
              imgPath={IBM_ETL_DataPipeline}
              isBlog={false}
              title="ETL and Data Pipelines with Shell, Airflow and Kafka"
              description="The IBM ETL and Data Pipelines course explore effective data extraction, transformation, and loading using Shell scripting, Apache Airflow, and Kafka, fostering robust data processing pipelines."
              demoLink="https://coursera.org/share/9c91a6fa6caf17ce612efe20c02a69e5"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
