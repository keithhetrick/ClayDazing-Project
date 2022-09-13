import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const openCallieDanielleShop = (e) => {
  const URL = "https://calliedanielleshop.com/shop/rainbow-earrings";
  window.open(URL);
};
const openLovelyDaffodilsShop = (e) => {
  const URL = "https://lovely-daffodils.myshopify.com/";
  window.open(URL);
};

const AffiliatesPage = () => {
  return (
    <div>
      <Link variant="secondary" size="sm" className="btn btn-light my-3" to="/">
        Home
      </Link>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h2>Affiliates</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Callie Danielle</h4>
              </ListGroup.Item>
              <button onClick={openCallieDanielleShop}>Callie Danielle</button>
              <ListGroup.Item>Price: Test 1</ListGroup.Item>
              <ListGroup.Item>Description: Test 1</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Lovely Daffodils</h4>
              </ListGroup.Item>
              <button onClick={openLovelyDaffodilsShop}>
                Lovely Daffodils
              </button>
              <ListGroup.Item>Price: Test 2</ListGroup.Item>
              <ListGroup.Item>Description: Test 2</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AffiliatesPage;
