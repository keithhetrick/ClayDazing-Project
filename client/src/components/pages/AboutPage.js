import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>About</h4>
            <h2>ClayDazing</h2>
          </Col>
          <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/"
          >
            Home
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
