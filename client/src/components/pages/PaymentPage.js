import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../actions/cartActions";
import CheckoutBreadcrumbs from "../CheckoutBreadcrumbs";
import FormContainer from "../FormContainer";

const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div>
      <Link variant="secondary" size="sm" className="btn btn-light my-3" to="/">
        Home
      </Link>
      <FormContainer>
        <CheckoutBreadcrumbs step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type="submit" variant="primary" style={{ marginTop: "10px" }}>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default PaymentPage;
