import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "../styles/Style.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  return (
    <Container
      fluid
      id="skills"
      className={`${"py-5"} ${Styles.skills} ${"mx-auto"} ${Styles.skills_height}`}
    >
      <Row>
        <div className={`${Styles.skillsTitle}`}>
          <h2 className="fs-1">Skills</h2>
        </div>
      </Row>
      <Row
        className={`${"lead"} ${"px-3"} ${"pb-5"} ${"justify-content-center"}
        ${"align-items-center"} `}
      >
        <Col lg={5} xs={12}>
          <div className={Styles.progress}>
            <span>
              HTML <i className={Styles.val}>100%</i>
            </span>

            <ProgressBar
              className={`${"bg-white"}`}
              now={100}
              animated
              variant="info"
            />
          </div>

          <div className={Styles.progress}>
            <span>
              CSS <i className={Styles.val}>60%</i>
            </span>
            <div>
              <ProgressBar
                className="bg-white"
                animated
                variant="info"
                now={60}
              />
            </div>
          </div>

          <div className={Styles.progress}>
            <span>
              JavaScript <i className={Styles.val}>75%</i>
            </span>

            <ProgressBar
              className="bg-white"
              animated
              variant="info"
              now={75}
            />
          </div>

          <div className={Styles.progress}>
            <span>
              C,C++ <i className={Styles.val}>80%</i>
            </span>

            <ProgressBar
              className="bg-white"
              my={5}
              animated
              variant="info"
              now={80}
            />
          </div>
        </Col>

        <Col lg={5} xs={12}>
          <div className={Styles.progress}>
            <span>
              REACT <i className={Styles.val}>75%</i>
            </span>

            <ProgressBar
              className="bg-white"
              animated
              variant="info"
              now={75}
            />
          </div>

          <div className={Styles.progress}>
            <span>
              BOOTSTRAP <i className={Styles.val}>65%</i>
            </span>

            <ProgressBar
              className="bg-white"
              animated
              variant="info"
              now={65}
            />
          </div>

          <div className={Styles.progress}>
            <span>
              JAVA <i className={Styles.val}>70%</i>
            </span>

            <ProgressBar
              className="bg-white"
              animated
              variant="info"
              now={70}
            />
          </div>

          <div className={Styles.progress}>
            <span>
              NODE JS <i className={Styles.val}>50%</i>
            </span>

            <ProgressBar
              className="bg-white"
              animated
              variant="info"
              now={50}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
