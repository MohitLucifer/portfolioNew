import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/hostel.png";
import editor from "../../Assets/Projects/Weather.png";
import chatify from "../../Assets/Projects/Ecommerce.png";
import suicide from "../../Assets/Projects/email.png";
import bitsOfCode from "../../Assets/Projects/chat.png";
import news from "../../Assets/Projects/new.png";
import snappy from "../../Assets/Projects/snappy.png";
import face from "../../Assets/Projects/face.png";

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
              title="StoreSavvy ( React.Js,Node.Js,MongoDB ,HTML,CSS,Javascript)"
              description=" An E-Commerce project developed using modern frontend technologies.CRUD operations is used.Functionality of view,search,filter product,Admin panel,User Panel,Payment,Add-to-cart option,JWT authentication.Admins have access to monitor the payments ,orders and users via Dashboard"
              ghLink="https://github.com/MohitLucifer/ECOMMERCE_HOST.git"
              demoLink="https://ecommerce-host.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snappy}
              isBlog={false}
              title="SnappyTalk"
              description="It is a app where any person can join and chat with other person which is also present on it.It has real-time chatting system.Using Node.js and Socket.IO, a chat room fosters real-time, multi-user interaction on the web, enabling seamless communication and message exchange among participants across various devices and locations."
              ghLink="https://github.com/MohitLucifer/chatAppHost"
              demoLink="https://snappytalk.netlify.app/login"
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
              ghLink="https://github.com/MohitLucifer/Email_sapm"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="BuzzBit (React Native,API-Fetch,Node.Js,HTML,CSS)"
              description="React Native, JavaScript, CSS for front-end development.API fetching to retrieve and display live news updates.Introduced multiple tabs (Discover, News, Profile, Saved)in BuzzBit, offering trending news, easy segment access, user profile management, and article bookmarking for enhanced content discoverability and user convenience"
              ghLink="https://github.com/MohitLucifer/React-Native-NewsApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Attendence Tracker"
              description="The face attendance tracker is an AI-based system that uses facial recognition to mark attendance by identifying and verifying student identities from webcam images. It integrates with a Firebase database to manage attendance records and leverages computer vision techniques to process and recognize faces in real-time."
              ghLink="https://github.com/MohitLucifer/Face-recognition_attendenec"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
