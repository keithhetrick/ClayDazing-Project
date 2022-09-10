import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Home
      </Link>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>Search</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
