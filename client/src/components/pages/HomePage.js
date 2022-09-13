import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            {/* <h6 style={{ fontStyle: "italic" }}>
              Handmade happiness for your ears.
            </h6> */}
            <div className="home-card">
              <Link
                style={{ border: "none" }}
                variant="secondary"
                size="sm"
                className="btn my-3"
                to="/products"
              >
                Welcome!
              </Link>
            </div>
          </Col>
          {/* <Image
            className="home-page-effect"
            src="images/clay-dazing-logo.png"
            alt="Clay-Dazing-Logo"
            // width="10"
            // height="10"
            fluid
            style={{ margin: "0" }}
          /> */}
          {/* <Link
            variant="secondary"
            size="sm"
            className="btn btn-light my-3"
            to="/products"
          >
            Products Page
          </Link> */}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
