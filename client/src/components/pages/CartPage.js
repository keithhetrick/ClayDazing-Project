import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>Cart</h4>
          </Col>
          <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/products"
          >
            Home
          </Link>
          <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/shipping"
          >
            check Shipping
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
