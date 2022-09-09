import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>FAQ's</h4>
          </Col>
          <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/"
          >
            Home
          </Link>
          <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/affiliates"
          >
            see Affiliates
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default FAQPage;
