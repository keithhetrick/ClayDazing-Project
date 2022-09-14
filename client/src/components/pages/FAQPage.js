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
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);

  // const toggle = (e) => {
  //   const value = e.value;
  //   setOpen(value);
  // };

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
          <Button
            className="btn btn-light my-3"
            onClick={() => setOpenOne(!openOne)}
            aria-controls="example-collapse-text"
            aria-expanded={openOne}
          >
            How should I remove from packaging?
          </Button>
          <Collapse in={openOne}>
            <Container>
              <Row>
                <Col className="text-center py-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ background: "none" }}>
                      Please be gentle as you remove your earrings from their
                      packaging. Place your thumb on the front of the earring
                      gently applying pressure, then remove backings and slip
                      earrings out of the card.
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Collapse>
          <Button
            className="btn btn-light my-3"
            onClick={() => setOpenTwo(!openTwo)}
            aria-controls="example-collapse-text"
            aria-expanded={openTwo}
          >
            How should I clean?
          </Button>
          <Collapse in={openTwo}>
            <Container>
              <Row>
                <Col className="text-center py-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ background: "none" }}>
                      To clean, wipe with a soft-bristle toothbrush or a damp
                      towelette. Remove earrings before showering or swimming.
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Collapse>
          <Button
            className="btn btn-light my-3"
            onClick={() => setOpenThree(!openThree)}
            aria-controls="example-collapse-text"
            aria-expanded={openThree}
          >
            What happens if the back pops off?
          </Button>
          <Collapse in={openThree}>
            <Container>
              <Row>
                <Col className="text-center py-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ background: "none" }}>
                      Try to avoid dropping earrings, as clay can be fragile. In
                      the case that your earring post on the back pops off, it
                      can easily be re-applied with Gorilla gel glue.
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Collapse>
          <Button
            className="btn btn-light my-3"
            onClick={() => setOpenFour(!openFour)}
            aria-controls="example-collapse-text"
            aria-expanded={openFour}
          >
            see Affiliates
          </Button>
          <Collapse in={openFour}>
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
