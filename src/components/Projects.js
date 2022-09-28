import React, { useState } from "react";
import { Col, Image, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import expandingCards from "../assets/projects/Expanding-cards.gif";
import calculator from "../assets/projects/calculator.gif";
import dictionary from "../assets/projects/Dictionary.gif";
import library from "../assets/projects/library-management.gif";
import movie from "../assets/projects/Movie-overview.gif";
import firstProject from "../assets/projects/First-project.gif";
import toDo from "../assets/projects/To-do.gif";
import Styles from "../styles/Style.module.css";

const Projects = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }
  return (
    <Container
      fluid
      id="projects"
      className={`${Styles.project} ${"py-5"} ${"px-5"}`}
    >
      <Row className={`${Styles.projectTitle}`}>
        <h2 className="fs-1">Projects</h2>
      </Row>
      <Row
        className={`${"lead"} ${"justify-content-center"} ${"align-items-center"}`}
      >
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={expandingCards}
            alt="Expanding Cards"
            className={`${Styles.img}`}
            onClick={() => handleShow()}
          />
        </Col>
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={calculator}
            alt="Expanding Cards"
            className={Styles.img}
            onClick={() => handleShow()}
          />
        </Col>
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={dictionary}
            alt="Expanding Cards"
            className={Styles.img}
            onClick={() => handleShow()}
          />
        </Col>
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={library}
            alt="Expanding Cards"
            className={Styles.img}
            onClick={() => handleShow()}
          />
        </Col>
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={movie}
            alt="Expanding Cards"
            className={Styles.img}
            onClick={() => handleShow()}
          />
        </Col>
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={firstProject}
            alt="Expanding Cards"
            className={Styles.img}
            onClick={() => handleShow()}
          />
        </Col>
        <Col className={`${Styles.project_item}`} lg={4} md={6}>
          <Image
            fluid
            src={toDo}
            alt="Expanding Cards"
            className={Styles.img}
            onClick={() => handleShow()}
          />
        </Col>
      </Row>

      {/* <Button className="me-2 mb-2" onClick={() => handleShow()}>
        Full screen
      </Button> */}

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </Container>
  );
};

export default Projects;
