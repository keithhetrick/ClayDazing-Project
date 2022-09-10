import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../Message";
import { addToCart } from "../../actions/cartActions";

const CartPage = ({ id, location, history }) => {
  const params = useParams();
  const productId = params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

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
