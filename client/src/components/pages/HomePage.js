import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
          {/* <Col>
            <Image
              className="d-inline-block align-top"
              src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1622139469757-RAKFB263SK7V4WQR18DY/Copy%2Bof%2B%255BOriginal%2Bsize%255D%2BCream%2Band%2BBrown%2BFood%2BVintage%2BLogo.jpg?format=1500w"
              alt="Clay-Dazing-Logo"
                // width="10"
                // height="10"
              fluid
              style={{ margin: "0" }}
            />
          </Col> */}
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
