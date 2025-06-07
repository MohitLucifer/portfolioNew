import React from "react";
import { Card, Container } from "react-bootstrap";

const experienceData = [
  {
    role: "iOS Developer Intern",
    company: "Motive",
    duration: "Jan 2025 – Jun 2025",
    description: [
      "Integrated chatbot support and built cross-platform modules using Kotlin Multiplatform Mobile (KMM).",
      "Applied RxSwift for reactive architecture and enhanced user experience.",
    ],
  },
];

const educationData = [
  {
    degree: "B.Tech. in Information Technology",
    school: "IIIT Allahabad",
    duration: "2021 - 2025",
    cgpa: "8.22/10",
  },
  {
    degree: "12th Standard",
    school: "Army Public School S.P Marg LKO, Uttar Pradesh",
    percentage: "95.2%",
  },
  {
    degree: "10th Standard",
    school: "Army Public School S.P Marg LKO, Uttar Pradesh",
    percentage: "94.4%",
  },
];

function ExperienceEducation() {
  return (
    <Container fluid className="about-section" style={{ minHeight: "100vh" }}>
      <Container>
        <Card
          style={{
            background: "#181624",
            borderRadius: "24px",
            boxShadow: "0 4px 32px rgba(162,89,236,0.13)",
            border: "none",
            marginTop: "60px",
            marginBottom: "60px",
            color: "#fff",
            maxWidth: 750,
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "inherit",
          }}
        >
          <Card.Body style={{ padding: "48px 36px" }}>
            <h2
              style={{
                color: "#be6adf",
                fontWeight: 700,
                marginBottom: 36,
                fontSize: "2.2rem",
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: 40, textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: "1.25em", color: "#fff" }}>
                  {exp.role}
                </div>
                <div style={{ color: "#a259ec", fontWeight: 600, fontSize: "1.08em" }}>
                  {exp.company}
                </div>
                <div style={{ color: "#aaa", fontSize: "1em", marginBottom: 10 }}>
                  {exp.duration}
                </div>
                <ul style={{ margin: "0 auto", display: "inline-block", textAlign: "left", color: "#ccc", fontSize: "1.05em", lineHeight: 1.7 }}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h2
              style={{
                color: "#be6adf",
                fontWeight: 700,
                marginBottom: 36,
                marginTop: 48,
                fontSize: "2.2rem",
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: 32, textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: "1.18em", color: "#fff" }}>
                  {edu.degree}
                </div>
                <div style={{ color: "#a259ec", fontWeight: 600, fontSize: "1.07em" }}>
                  {edu.school}
                  {edu.duration && (
                    <span style={{ color: "#aaa", fontWeight: 400, marginLeft: 8 }}>
                      ({edu.duration})
                    </span>
                  )}
                </div>
                {edu.cgpa && (
                  <div style={{ color: "#be6adf", fontWeight: 600, fontSize: "1.05em" }}>
                    CGPA: {edu.cgpa}
                  </div>
                )}
                {edu.percentage && (
                  <div style={{ color: "#be6adf", fontWeight: 600, fontSize: "1.05em" }}>
                    Percentage: {edu.percentage}
                  </div>
                )}
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default ExperienceEducation;