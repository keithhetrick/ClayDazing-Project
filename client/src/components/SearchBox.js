import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(query ? `/search/?query=${query}` : "/search");
    } else {
      console.log("'I'm not going anywhere' said the Search bar");
    }
  };

  return (
    <div>
      {/* <Link className=" btn btn-light my-3" to="/">
        Go Back
      </Link> */}
      <Form className="d-flex me-auto" onSubmit={submitHandler}>
        <InputGroup>
          <Form.Control
            type="text"
            name="q"
            id="q"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search products..."
            aria-label="Search Products"
            aria-describedby="button-search"
          ></Form.Control>
          <Button variant="outline-primary" type="submit" id="button-search">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBox;
