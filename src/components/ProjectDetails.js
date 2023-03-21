import React from "react";
import { Button, Modal } from "react-bootstrap";

const ProjectDetails = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Rayan Ahmad</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetails;
