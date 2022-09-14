// import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            {/* <Col className="text-center py-3 home-body"> */}
            {/* <h6 style={{ fontStyle: "italic" }}>
              Handmade happiness for your ears.
            </h6> */}
            {/* <span>
              if (loggedIn){<Alert>already logged in!</Alert>} else{" "}
              {
                <Alert>
                  Sign in <Link to="/login" /> here{" "}
                </Alert>
              }
            </span> */}
            {/* <main className="home-wrapper">
              <div class="wrap-image">
                <img src="https://picsum.photos/200/300" alt=""></img>
              </div>
            </main> */}

            <div className="home-card">
              <div>
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
