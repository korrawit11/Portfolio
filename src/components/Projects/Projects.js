import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Colmar from "../../Assets/Projects/colmar.png"
import Jamming from "../../Assets/Projects/jamming.png"
import Fitvenger from "../../Assets/Projects/fitvenger.png"


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
              imgPath = {Fitvenger}
              title="FIT-VENGER"
              description="This project about track or keep your activities to website. We use the CSS, JavaScript, ReactJs, MongoDB to build this website."
              ghLink="https://github.com/korrawit11/fitvenger"
              demoLink="https://fitvenger-git-expresssessiondeployment-kiatbordin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath = {Jamming}
              title="Jamming"
              description="One of the project about API. I study about react and create this website from react and use API to save playlist to Spotify and anybody who have I access to use it they can use my playlist in Spotify application."
              ghLink="https://github.com/korrawit11/jamming"
              demoLink="https://jamming-gamma.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath = {Colmar}
              title="Colmar Academy"
              description="This is my first project with HTML and CSS. This was hard for me to start but I can pass it. I've learn a lot!"
              ghLink="https://github.com/korrawit11/Colmar-Academy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
