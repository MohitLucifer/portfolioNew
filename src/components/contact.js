import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Particle from "./Particle";
import homeLogo from "../Assets/home-main.svg";
import { Col, Container, Row } from "react-bootstrap";
// import "../../.env";
// E:\Projects\Portfolio_2.0\.env
// E:\Projects\Portfolio_2.0\src\components\contact.js
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "100vh",
  };

  return (
    <Container className="contact" style={containerStyle}>
      <Row>
        <Col>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </Col>
        <Col>
          <StyledContactForm>
            <h1>Contact Form</h1>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your Name"
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your Email ID"
              />
              <label>Message</label>
              <textarea name="message" placeholder="Enter your Message" />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  /*margin: 112px auto; /* Center horizontally */

  /*display: flex-column;
  justify-content: center; /* Center horizontally */
  /* align-items: center; /* Center vertically */

  h1 {
    color: white;
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color: white;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
