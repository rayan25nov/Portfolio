import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Projects = () => {
  return (
    <Container id="projects" className="mt-5 pt-5 vh-100">
      <Row className="text-center text-md-start mx-5">
        <p className="my-5 lead">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.
        </p>
      </Row>
    </Container>
  );
};

export default Projects;
