import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Mohit Kumar</span> from{" "}
            <span className="purple">Uttar Pradesh, India</span>.
            <br />
            I hold a Bachelor of Technology (B.Tech) degree in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">IIIT Allahabad</span>.
            <br />
            <br />
            I specialize in building high-performance applications with a focus on{" "}
            <b className="purple">iOS development, full-stack web development,</b> and{" "}
            <b className="purple">machine learning-driven solutions</b>.
            <br />
            My technical toolkit includes languages like{" "}
            <b className="purple">C++, JavaScript, Swift,</b> and{" "}
            <b className="purple">Java</b>, along with frameworks such as{" "}
            <b className="purple">React.js, React Native, Node.js,</b> and{" "}
            <b className="purple">Kotlin Multiplatform Mobile (KMM)</b>.
            <br />
            <br />
            Outside of development, I actively participate in technical contests, and I’ve solved{" "}
            <b className="purple">1000+ problems</b> on platforms like LeetCode and Codeforces.
            <br />
            <br />
            When I’m not coding, I enjoy engaging in activities that help me recharge and stay creative:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategic and competitive games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech documentaries and movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Mohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;