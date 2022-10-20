import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Ratings from "../Ratings";
import Message from "../Message";
import Loader from "../Loader";
import {
  listProductDetails,
  createProductReview,
  deleteProduct,
} from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    // loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    if (!product._id || product._id !== id) {
      dispatch(listProductDetails(id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, id, product._id, successProductReview]);

  const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
    console.log(dispatch(addToCart(id, qty)));
    navigate("/cart");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    );
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
      navigate("/admin/productlist");
    }
  };

  return (
    <div>
      <Row>
        <Col
          md={6}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link className="btn btn-light my-3" to="/products">
            Go Back
          </Link>
          <Button className="btn my-3" variant="primary" md={3}>
            Next
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Ratings
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  <div style={{ height: "33vh", overflowY: "scroll" }}>
                    <p>
                      Thank you so much for taking the time to stop by and look
                      at my creations!
                    </p>
                    <p>
                      Please note that all pieces are handmade and no piece will
                      look exactly the same. All dangles, studs, and ball-posts,
                      are made with stainless steel and are hypoallergenic and
                      nickel, and lead-free. Safe for sensitive ears!{" "}
                      <i className="fa-solid fa-heart"></i>
                    </p>
                    <p>***CARING FOR YOUR CLAY EARRINGS***</p>
                    <p>
                      see <Link to="/faq">FAQ's</Link> for packaging & maintence
                      questions
                    </p>
                    {product.description}
                    <p>
                      Handmade earrings are crafted with polymer clay and
                      stainless steel, hypoallergenic posts.
                    </p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              {userInfo && userInfo.isAdmin && (
                <Link
                  className="btn btn-secondary my-3"
                  style={{ width: "100%" }}
                  to={`/admin/product/${product._id}/edit`}
                >
                  Edit
                </Link>
              )}
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0
                          ? "In Stock"
                          : " Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Row>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        {product.countInStock > 0
                          ? "In Stock"
                          : " Out Of Stock"}
                      </Button>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <div style={{ textAlign: "right" }}>
                {userInfo && userInfo.isAdmin && (
                  <Link
                    onClick={() => deleteHandler(product._id)}
                    className="btn btn-danger my-3"
                    to="/admin/productlist"
                  >
                    Delete Item
                  </Link>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Ratings value={review.rating} />
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                {!product.reviews.some((rev) => rev.user === userInfo?._id) && (
                  <>
                    <h2>Write a Customer Review</h2>
                    {errorProductReview && (
                      <Message variant="danger">{errorProductReview}</Message>
                    )}

                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId="rating">
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            as="select"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group
                          controlId="comment"
                          style={{ marginTop: "10px" }}
                        >
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as="textarea"
                            row="3"
                            value={comment}
                            onChange={(e) => {
                              setComment(e.target.value);
                            }}
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          type="submit"
                          variant="primary"
                          style={{ marginTop: "10px" }}
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <Message>
                        Please <Link to="/login">sign in</Link> to write a
                        review
                      </Message>
                    )}
                  </>
                )}
              </ListGroup>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
