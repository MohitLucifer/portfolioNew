import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mohit1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate software developer and a graduate in <b className= "purple"> Information Technology </b>  from 
              <b className= "purple"> IIIT Allahabad </b>, 
              with hands-on experience in building scalable and efficient software solutions.
              <br />
              <br />I have developed strong command over languages like
              <i>
                <b className="purple"> C++, Java, JavaScript, and Swift,</b>
              </i>{" "}
              and I’ve also worked extensively with frameworks such as{" "}
              <i>
                <b className="purple">React.js, React Native, and Node.js.</b>
              </i>
              <br />
              <br />
              My areas of interest span across{" "}
              <i>
                <b className="purple">
                  full-stack web development, iOS mobile development, and deep
                  learning-based computer vision.
                </b>
              </i>
              <br />
              <br />
              As an iOS Developer Intern at Motive, I’ve contributed to
              integrating chatbot support and building cross-platform modules
              using <b className="purple">
                Kotlin Multiplatform Mobile (KMM),
              </b>{" "}
              while applying <b className="purple">RxSwift</b> to enable
              reactive architecture and enhance user experience.
              <br />
              <br />I also love to work on impactful side projects—like{" "}
              <b className="purple">eCommerce platforms</b> and{" "}
              <b className="purple">news apps</b>—and explore innovative ideas
              such as{" "}
              <b className="purple">
                deepfake detection using CNNs and video super-resolution
                techniques.
              </b>
              <br />
              <br />
              My goal is to leverage technology to build seamless digital
              products, solve real-world problems, and continue evolving as a
              developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                height={100}
              />
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
                  href="https://github.com/MohitLucifer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/i/flow/login"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/mohitkumar00228"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mohit_kumar_real/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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