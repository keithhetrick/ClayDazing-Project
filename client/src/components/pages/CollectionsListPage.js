import React from "react";
import { Image } from "react-bootstrap";
// import { Col, Container, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import Loader from "../Loader";
// import Message from "../Message";
// import Product from "../Product";

const CollectionsListPage = () => {
  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  const imgs = document.getElementById("imgs");
  // const leftBtn = document.getElementById("left");
  // const rightBtn = document.getElementById("right");

  const img = document.querySelectorAll("#imgs img");

  let index = 0;

  let interval = setInterval(run, 5000);

  function run() {
    index++;

    changeImage();
  }

  function changeImage() {
    if (index > img.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 750}px)`;
  }
  // changeImage();

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3500);
  }
  // resetInterval();

  // rightBtn.addEventListener("click", () => {
  //   index++;
  //   changeImage();
  //   resetInterval();
  // });

  // leftBtn.addEventListener("click", () => {
  //   index--;
  //   changeImage();
  //   resetInterval();
  // });

  return (
    <div className="collection-list-body">
      <div className="image-container" id="imgs">
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1660345818474-1CW32TFSDYZ8J4JG46NI/3F810159-B3CC-4068-B19D-08E061DE38C6?format=1500w"
          alt="first-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1637216792754-FZY5NUB1RDJ3CH4PEVC9/0A7020C2-DAFB-40E3-A593-B155F2774473?format=1500w"
          alt="second-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1660342407811-LR3G06MXC6WX3HVRSWZZ/56EA768B-E69F-452D-BD29-4E0F8B52A1BC?format=1500w"
          alt="third-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1655072138122-3VMTGFF7LHVWXZCIP8R8/DC591A9C-CB48-4834-B267-9DA7EA8C9E76?format=1500w"
          alt="fourth-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1655072061882-7G52SLJWCQ6ZTKSXD7FR/5F8F5762-D5F7-4BA9-8B1C-928BE57B0FE3?format=1500w"
          alt="fifth-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1651337753678-I8059OX8F4W4GUMTPD9W/17881999-191F-4E52-BF42-2AF176CB041A?format=1500w"
          alt="sixth-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1649027449178-VS3J1N0HSCSKZYFQU1MR/3BABF8ED-E81F-4A2A-B966-8B624511963F?format=1500w"
          alt="seventh-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1655259918785-J0GQA7CEHCBPQ8V6CW24/B0F7A069-410E-42D1-9003-3FB6B84D8A63?format=1500w"
          alt="eighth-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1640051084522-80AEEJ7A1DN46GOLX0GY/55E95C75-C438-4064-80C5-95ADD9FC68E0?format=1500w"
          alt="ninth-image"
        />
        <Image
          className="img-body"
          src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/1660969821633-K62SENCIF52K392G1P0Z/8270A93A-6EB9-4760-BF7B-09D9ABC7F916?format=1500w"
          alt="tenth-image"
        />
      </div>
      {/* <Container>
        <Row>
          <Col>
            <h1>Hello from Collections Page!</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Row className="box-wra">
                {products.map((product) => (
                  <Col
                    className="bo"
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default CollectionsListPage;
