import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pixelperfect.png";
import emotion from "../../Assets/Projects/emotion.png";
import flightbooking from "../../Assets/Projects/flightbooking.png";
import chatify from "../../Assets/Projects/chatify.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/bitsOfCode.jpeg";

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
              imgPath={chatify}
              isBlog={false}
              title="We Care food recommendation system"
              description="The We_Care_food_recommendation_system aims to provide personalized meal plans tailored to individual dietary needs and preferences using advanced techniques like KMeans clustering and the random forest algorithm. It features an intuitive interface for users to input their dietary goals and restrictions, with a dashboard offering insights into their nutritional status to promote healthier eating habits and overall well-being."
              ghLink="https://github.com/SaurabhMulik1718/We_Care_food_recommendation_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FAQ  chatapp"
              description="The FAQ chatapp project is a user-friendly chat application designed to address frequently asked questions (FAQs) efficiently. It offers a streamlined interface for users to access and navigate through a database of commonly asked questions, providing quick and accurate responses. This app aims to enhance user experience by providing instant access to information and reducing the need for manual search, ultimately improving customer satisfaction."
              ghLink="https://github.com/SaurabhMulik1718/FAQ_chatapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flightbooking}
              isBlog={false}
              title="Flight-booking"
              description="The flight booking Django application is a web platform developed using Python, HTML, CSS, and JavaScript. It facilitates easy and efficient booking of flights by users, offering a user-friendly interface for browsing, selecting, and purchasing tickets. With seamless integration of backend Django functionality and frontend design elements, the application ensures a smooth booking experience for travelers."
              ghLink="https://github.com/SaurabhMulik1718/Flight-booking"            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pixel Perfect"
              description="Pixel Perfect is a website dedicated to enhancing image quality to perfection. Utilizing advanced tools and techniques, it offers users the ability to refine and improve the clarity, resolution, and overall appearance of their images with precision and accuracy."
              ghLink="https://github.com/SaurabhMulik1718/CV_Activity"
              demoLink="https://cvpixelperfect1.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
