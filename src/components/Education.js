import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "../styles/Style.module.css";

const Education = () => {
  return (
    <Container fluid id="education" className={`${Styles.content} ${"py-5"}`}>
      <Row className="text-center text-md-start mx-5 lead py-2">
        <Col pt={5}>
          <div className={Styles.sectionTitle}>
            <h2>Education</h2>
          </div>
          <div className={Styles.resumeItem}>
            <div className="fs-2 lh-sm">
              <h4>B.Tech in Information Technology</h4>
              <h5>2020 - 2024</h5>
            </div>
            <p>
              <em>University of kalyani, Nadia West Bengal</em>
            </p>
          </div>
          <div className={Styles.resumeItem}>
            <div className="fs-2 lh-sm">
              <h4>Class XII</h4>
              <h5>2017 - 2019</h5>
            </div>
            <p>Percentage:-78.6/100</p>
            <p>
              <em>Krishnanand Memorial Academy, Asarganj Munger Bihar</em>
            </p>
          </div>
          <div className={Styles.resumeItem}>
            <div className="fs-2 lh-sm">
              <h4>Class X</h4>
              <h5>2017</h5>
            </div>
            <p>CGPA:-9.0/10</p>
            <p>
              <em>New Era Public School, Munger Bihar</em>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
