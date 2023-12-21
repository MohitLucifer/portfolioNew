import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/hostel.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Weather.png";
import chatify from "../../Assets/Projects/Ecommerce.png";
import suicide from "../../Assets/Projects/email.png";
import bitsOfCode from "../../Assets/Projects/chat.png";

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
              title="Ecommerce"
              description=" An E-Commerce project developed using modern frontend technologies.CRUD operations is used.Functionality of view,search,filter product,Admin panel,User Panel,Payment,Add-to-cart option,JWT authentication.Admins have access to monitor the payments ,orders and users via Dashboard"
              ghLink="https://github.com/MohitLucifer/ECOMMERCE_HOST.git"
              demoLink="https://shiny-gold-tank-top.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chat-Room"
              description="It is a app where any person can join and chat with other person which is also present on it.It has real-time chatting system.Using Node.js and Socket.IO, a chat room fosters real-time, multi-user interaction on the web, enabling seamless communication and message exchange among participants across various devices and locations."
              ghLink="https://github.com/MohitLucifer/chatSocket"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="Implemented weather finding application in which users can find weather by giving their city name.The Weather-Site uses the OpenWeatherMap API to get the current weather.It will describe the overall weather conditions, including the level of humidity, atmospheric pressure, and the speed of the wind."
              ghLink="https://github.com/MohitLucifer/weatherapp"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hostel Management System"
              description="A hostel management system automates lodging operations, managing room allocation, student details, and fee records. It simplifies administrative tasks, enhances security with check-in/check-out logs, and facilitates efficient resource allocation. This system streamlines hostel operations, ensuring seamless management and improved student accommodation experiences."
              ghLink="https://github.com/MohitLucifer/Hostel-management-System-Project.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Email spam detection"
              description="Email spam detection involves using machine learning algorithms to classify emails as either spam or non-spam (ham). This project utilizes natural language processing techniques to extract features from emails, such as word frequency or presence of specific keywords. By training models like Naive Bayes, Support Vector Machines (SVM), or deep learning models on labeled datasets."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
