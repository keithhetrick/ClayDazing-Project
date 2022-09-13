import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  ListGroup,
  // Image,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const [open, setOpen] = useState(false);
  const openCallieDanielleShop = (e) => {
    const URL = "https://calliedanielleshop.com/shop/rainbow-earrings";
    window.open(URL);
  };
  const openLovelyDaffodilsShop = (e) => {
    const URL = "https://lovely-daffodils.myshopify.com/";
    window.open(URL);
  };

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Home
      </Link>
      <Container style={{ marginTop: "-10px" }}>
        <Row>
          <Col className="text-center py-3">
            <h4>FAQ's</h4>
          </Col>
          {/* <div className="demo__content">
            <h2 className="demo__heading">What do you need help with?</h2>
            <div className="demo__elems">
              <div className="demo__elem demo__elem-1">
                With advertising online
              </div>
              <div className="demo__elem demo__elem-2">With a website</div>
              <div className="demo__elem demo__elem-3">
                I need help with both
              </div>
              <span className="demo__hover demo__hover-1"></span>
              <span className="demo__hover demo__hover-2"></span>
              <span className="demo__hover demo__hover-3"></span>
              <div className="demo__highlighter">
                <div className="demo__elems">
                  <div className="demo__elem">With advertising online</div>
                  <div className="demo__elem">With a website</div>
                  <div className="demo__elem">I need help with both</div>
                </div>
              </div>
            </div>
          </div> */}
          <Button
            className="btn btn-light my-3"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            see Affiliates
          </Button>
          <Collapse in={open}>
            <Container>
              <Row>
                <Col className="text-center py-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h4 style={{ textAlign: "center", margin: "0" }}>
                        Callie Danielle
                      </h4>
                    </ListGroup.Item>
                    <Card.Img
                      className="align-center"
                      src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/2e1a22c5-09f0-4e7a-8a4d-2123e8816184/A96D028A-91DC-4A7F-9842-ED8DCB0107C2.jpg?format=1500w"
                      // width="100"
                      // height="100"
                    />
                    <button
                      onClick={openCallieDanielleShop}
                      className="btn btn-light my-3"
                    >
                      click here to see MORE from Callie Danielle
                    </button>
                    <ListGroup.Item style={{ background: "none" }}>
                      Clay Dazing x Callie Danielle - Shop the collab{" "}
                      <Link to="/products">here!</Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col className="text-center py-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h4>Lovely Daffodils</h4>
                    </ListGroup.Item>
                    <Card.Img
                      className="align-center"
                      src="https://cdn.shopify.com/s/files/1/0522/4552/8765/files/thumbnail_900x.jpg?v=1631113354"
                      // width="100"
                      // height="100"
                    />
                    <button
                      onClick={openLovelyDaffodilsShop}
                      className="btn btn-light my-3"
                    >
                      click here to see MORE from Lovely Daffodils
                    </button>
                    <ListGroup.Item style={{ background: "none" }}>
                      Clay Dazing x Lovely Daffodils - Shop the collab{" "}
                      <Link to="/products">here! </Link>{" "}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Collapse>
        </Row>
      </Container>
    </div>
  );
};

export default FAQPage;
