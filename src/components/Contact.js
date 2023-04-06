import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Styles from "../styles/Style.module.css";
import { BiEnvelope } from "react-icons/bi";
import { BsGeoAlt, BsPhone } from "react-icons/bs";
import MyVerticallyCenteredModal from "./Modal";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../config/firebase";

const Contact = () => {
  const [modalShow, setModalShow] = useState(false);
  const [resume, setResume] = useState(null);
  useEffect(() => {
    getDownloadURL(ref(storage, "Rayan_Resume.pdf")).then((url) => {
      setResume(url);
    });
  }, []);

  return (
    <div>
      <Container fluid id="contact" className={`${"py-5"} ${"px-5"}`}>
        <Row className={`${Styles.contactTitle}`}>
          <h2 className="fs-1">Contact</h2>
        </Row>
        <Row className="my-5 mx-auto align-items-center justify-content-center">
          <Col lg={4} pb={5} mb={5} className={Styles.contact}>
            <div className={Styles.address}>
              <i>
                <BsGeoAlt />
              </i>

              <h4>Location:</h4>
              <p>
                Banyan Hostel,University of Kalyani, Nadia West Bengal 741235
              </p>
            </div>

            <div className={Styles.email}>
              <i>
                <BiEnvelope />
              </i>
              <h4>Email:</h4>
              <p>rayan.ahmad@outlook.in</p>
            </div>

            <div className={Styles.phone}>
              <i>
                <BsPhone />
              </i>
              <h4>Call:</h4>
              <p>+91 8507545405</p>
            </div>
          </Col>
        </Row>
        <Row className="my-5 mx-auto align-items-center justify-content-center">
          <Col sm={4} px={5} py={5}>
            <Button variant="outline-info" onClick={() => setModalShow(true)}>
              My Resume
            </Button>
            <MyVerticallyCenteredModal
              resume={resume}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>

      {/*======= Footer ======= class="copyright"*/}
      <Container fluid className={Styles.footer}>
        &copy; Copyright{" "}
        <strong>
          <span>Rayan</span>
        </strong>
        . All Rights Reserved
      </Container>
    </div>
  );
};

export default Contact;
