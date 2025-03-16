import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCards from "./CertificationCards";
import Particle from "../Particle";
import GoogleCloudBigData from "../../Assets/Certificates/GoogleCloud_Certificate.jpg";
import AWS_CloudPratice from "../../Assets/Certificates/AWS_CloudPratice.jpg";
import JAVASCRIPT_ADVANCE from "../../Assets/Certificates/JAVASCRIPT_ADVANCE.jpg";
import JAVASCRIPT_BASIC from "../../Assets/Certificates/JAVASCRIPT_BASIC.jpg";
import REACT from "../../Assets/Certificates/REACT.jpg";
import NODEJS from "../../Assets/Certificates/NODEJS.jpg";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificate </strong>
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
              description="This certification covers Google Cloud’s data-to-AI workflow, infrastructure layers, and analytics using BigQuery. It also covers machine learning deployment, Vertex AI, streaming data processing, and a structured ML workflow."
              demoLink="https://coursera.org/share/8183da19b56fea0c26e8251c9c3316d9"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={AWS_CloudPratice}
              isBlog={false}
              title="AWS Certification"
              description="This certification covers AWS IAM, EC2, Load Balancing, Auto Scaling, RDS, DynamoDB, and S3. It explores analytics services like Redshift and Athena, machine learning services like SageMaker, and security best practices with IAM policies, KMS, and Cognito."
              demoLink="https://udemy-certificate.s3.amazonaws.com/image/UC-df15318f-cd45-497d-8c8c-939ac7b9c50f.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={JAVASCRIPT_BASIC}
              isBlog={false}
              title="JavaScript Under the Hood Certification"
              description="This certification explores JavaScript fundamentals, debugging, closures, prototypal inheritance, best coding practices, and building JavaScript frameworks. It enhances understanding of JavaScript's internal workings and execution model."
              demoLink="https://udemy-certificate.s3.amazonaws.com/image/UC-RSGUU05U.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={JAVASCRIPT_ADVANCE}
              isBlog={false}
              title="JavaScript Certification"
              description="This certification covers JavaScript fundamentals, data structures, DOM manipulation, OOP, async programming, error handling, web APIs, modules, tooling, and unit testing. It ensures proficiency in modern JavaScript development."
              demoLink="https://udemy-certificate.s3.amazonaws.com/image/UC-72F4T9RZ.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={REACT}
              isBlog={false}
              title="React Certification"
              description="This certification covers React fundamentals, hooks, context API, JWT authentication, Redux, and state management. It emphasizes building scalable front-end applications with best practices and performance optimization."
              demoLink="https://udemy-certificate.s3.amazonaws.com/image/UC-135806d5-491d-48cc-a043-ac3846ba200c.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={NODEJS}
              isBlog={false}
              title="NodeJS Certification"
              description="This certification covers NodeJS server-side concepts, Express for web development, MongoDB, RESTful API creation, authentication, security, and backend-as-a-service approaches. It provides hands-on experience in backend development."
              demoLink="https://coursera.org/share/844b60086e34221b969f5f8505172927"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
