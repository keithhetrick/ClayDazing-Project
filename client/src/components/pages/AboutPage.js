import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Home
      </Link>
      <Container style={{ marginTop: "-10px" }}>
        <Row>
          <Col className="text-center py-3">
            {/* <h6>About</h6> */}
            <h2>Clay Dazing</h2>
          </Col>
        </Row>
        <Row>
          Earrings are more than just accessories. They are confidence boosters.
          They are mood changers. They are statement pieces that can help us
          express how we feel. When I approach a new collection, my first
          thought is, "will this piece make someone happy?" I truly hope that
          every time you wear Clay Dazing earrings that it brings a smile
          ear-to-ear.
        </Row>
        <br />
        <Row>
          As for my Clay Story—I’m Maria, creator, and owner of Clay Dazing. I
          started making polymer clay earrings in 2020 as a fun hobby and stress
          reliever and fell completely in love with the craft. After posting
          some of my first pieces to my personal social media, there was a
          decent interest and thus, Clay Dazing was born. And I am so thankful
          you are here for it. 💗
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
