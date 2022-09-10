import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShippingPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>Shipping</h4>
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

export default ShippingPage;
