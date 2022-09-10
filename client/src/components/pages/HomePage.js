import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h6 style={{ fontStyle: "italic" }}>
              Handmade happiness for your ears.
            </h6>
          </Col>
          <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/products"
          >
            Products Page
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
