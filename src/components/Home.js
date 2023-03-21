import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/profile.jpeg";
import Styles from "../styles/Style.module.css";

const Home = () => {
  return (
    <Container
      fluid
      className={`${Styles.home} ${"vh-100"} ${"pt-5"}`}
      id="home"
    >
      <Row
        className={`${"justify-content-center"} ${"align-items-center"} ${"vh-100"}`}
      >
        <Col
          xs={5}
          start={50}
          className={`${"text-center"} ${"justify-content-end"}`}
        >
          <Image fluid src={profile} alt="profile" className={Styles.image} />
        </Col>
        <Col sm={5} className="text-center text-md-start mx-5 order-lg-first">
          <h1>Hi I'm</h1>
          <p className="display-2">Rayan Ahmad</p>
          <p className="my-5 lead fs-4" style={{ fontFamily: "roboto" }}>
            I am a driven and ambitious student with a passion for programming
            and web development. I have experience with languages such as
            JavaScript, Java and C++, and have developed a number of basic
            programs and websites on my own. I am always looking for new
            opportunities to learn and grow as a developer, and believe that my
            dedication and determination will help me succeed in this field.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
