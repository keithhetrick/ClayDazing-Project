import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AffiliatesPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>Affiliates</h4>
          </Col>
        </Row>
        <Col md={7}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Test</h2>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>Price: $Test 2</ListGroup.Item>
            <ListGroup.Item>Description: $Test 3</ListGroup.Item>
          </ListGroup>
        </Col>
        <Link
          variant="secondary"
          size="sm"
          className="btn btn-light my-3"
          to="/"
        >
          Home
        </Link>
      </Container>
    </div>
  );
};

export default AffiliatesPage;
