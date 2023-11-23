import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GithubFinder from "../../Assets/Projects/GitHubFinder.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Resturant from "../../Assets/Projects/ResturantPage.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GithubFinder}
              isBlog={false}
              title="GitHub-Finder"
              description="This application fetches data from the GitHub Api. In this application, you type any person name and application shows you Github profile of that person"
              ghLink="https://github.com/RohitKumarSinha/react/tree/master/Github-finder"
              demoLink="https://githubfider33333.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="This is an E-commerce website where you signup, login, add product to cart, wish list your product. it also uses fake backend REST API. "
              ghLink="https://github.com/RohitKumarSinha/react/tree/master/E-Commerce"
              demoLink="https://shopanything.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resturant}
              isBlog={false}
              title="Resturant Landing Page"
              description="This is the beautiful landing page of the restaurant."
              ghLink="https://github.com/RohitKumarSinha/react/tree/master/resturant"
              demoLink="https://resutrant-app.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
