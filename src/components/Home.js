import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/profile.jpg";
import "@fontsource/roboto";

const Home = () => {
  return (
    <Container
      fluid
      className="pt-5 vh-100"
      id="home"
      style={{ background: "#D2DAFF", color: "#6F38C5" }}
    >
      <Row className="justify-content-center align-items-center pt-5">
        <Col xs={5} start={50} className="text-center justify-content-end">
          <Image
            fluid
            src={profile}
            alt="profile"
            style={{
              borderRadius: "50%",
            }}
          />
        </Col>
        <Col md={5} className="text-center text-md-start mx-5">
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
