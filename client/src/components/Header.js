import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Nav.Link>
              <Image
                className="d-inline-block align-top"
                src="data:image/png;base64,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"
                alt="Clay-Dazing-Logo"
                width="100"
                height="100"
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
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminMenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
