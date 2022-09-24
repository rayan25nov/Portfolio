import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/profile.jpg";
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
        <Col sm={5} className="text-center text-md-start mx-5">
          <h1>Hi I'm</h1>
          <p className="display-2">Rayan Ahmad</p>
          <p className="my-5 lead fs-4" style={{ fontFamily: "roboto" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
