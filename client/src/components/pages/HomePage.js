import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>Handmade happiness for your ears</h4>
          </Col>
          <Link className="btn btn-light my-3" to="/products">
            Products Page
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
