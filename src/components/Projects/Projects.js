import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GithubFinder from "../../Assets/Projects/GitHubFinder.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Resturant from "../../Assets/Projects/ResturantPage.png";



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
              description="This app helps you look at GitHub profiles easily! It uses HTML5, CSS, JavaScript, and React. With Axios, it gets information from GitHub without any hassle. Just type a name, and you'll see that person's GitHub profile right away."
              ghLink="https://github.com/RohitKumarSinha/react/tree/master/Github-finder"
              demoLink="https://githubfider33333.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="
              This online shop is like a cool mall online! It’s made with HTML5, CSS, JavaScript, React, Redux, Axios, and Bootstrap. You can join up, log in, put stuff in your cart, and make a wish list of things you really like. But here's the fun part: you can do all this without buying anything for real! It's like playing in a store, but it's just for fun."
              ghLink="https://github.com/RohitKumarSinha/react/tree/master/E-Commerce"
              demoLink="https://shopanything.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resturant}
              isBlog={false}
              title="Resturant Landing Page"
              description="This restaurant's webpage looks awesome! It's made using HTML5, CSS, JavaScript, React, Axios, and Bootstrap. It's like a beautiful picture that shows you what the restaurant is like. You can explore and see what's there before actually going. It works well on phones too!"
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
