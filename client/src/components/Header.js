import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Nav.Link>
              <Image
                className="d-inline-block align-top"
                src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1622139469757-RAKFB263SK7V4WQR18DY/Copy%2Bof%2B%255BOriginal%2Bsize%255D%2BCream%2Band%2BBrown%2BFood%2BVintage%2BLogo.jpg?format=1500w"
                alt="Clay-Dazing-Logo"
                width="50"
                height="50"
                fluid
              />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" style={{ marginLeft: "5px" }}>
            <Navbar.Brand>Clay Dazing</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="ml-auto">
              <LinkContainer to="/search">
                <Nav.Link>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  Search
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  {/* <i className="fa-solid fa-rainbow"></i> */}
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>FAQ's</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
