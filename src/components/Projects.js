import React from "react";
import { Col, Image } from "react-bootstrap";
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
  return (
    <Container
      fluid
      id="projects"
      className={`${Styles.project} ${"py-5"} ${"px-5"}`}
    >
      <Row>
        <div className={`${Styles.projectTitle}`}>
          <h2 className="fs-1">Projects</h2>
        </div>
      </Row>
      <Row
        className={`${"lead"} ${"justify-content-center"} ${"align-items-center"} `}
      >
        <Col
          className={`${Styles.project_item} ${"filter-app"} `}
          lg={4}
          md={6}
        >
          <div>
            <Image fluid src={expandingCards} alt="Expanding Cards" />
          </div>
        </Col>
        <Col className={`${Styles.project_item} ${"filter-app"}`} lg={4} md={6}>
          <div>
            <Image fluid src={calculator} alt="Expanding Cards" />
          </div>
        </Col>
        <Col className={`${Styles.project_item} ${"filter-app"}`} lg={4} md={6}>
          <div>
            <Image fluid src={dictionary} alt="Expanding Cards" />
          </div>
        </Col>
        <Col className={`${Styles.project_item} ${"filter-app"}`} lg={4} md={6}>
          <div>
            <Image fluid src={library} alt="Expanding Cards" />
          </div>
        </Col>
        <Col className={`${Styles.project_item} ${"filter-app"}`} lg={4} md={6}>
          <div>
            <Image fluid src={movie} alt="Expanding Cards" />
          </div>
        </Col>
        <Col className={`${Styles.project_item} ${"filter-app"}`} lg={4} md={6}>
          <div>
            <Image fluid src={firstProject} alt="Expanding Cards" />
          </div>
        </Col>
        <Col className={`${Styles.project_item} ${"filter-app"}`} lg={4} md={6}>
          <div>
            <Image fluid src={toDo} alt="Expanding Cards" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
