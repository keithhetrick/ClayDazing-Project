import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listProducts } from "../../actions/productActions";
import Product from "../Product";
import Message from "../Message";
import Loader from "../Loader";
import SearchBox from "../SearchBox";
import ProductCarousel from "../ProductCarousel";

const ProductPage = () => {
  // const { id } = useParams();
  // const query = id.query.query;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <main>
      {<ProductCarousel />}
      <Container>
        <Row>
          <Col md={3}>
            <Link className=" btn btn-light my-3" to="/">
              Go Back
            </Link>
          </Col>
          <Col
            className="text-center py-3"
            md={6}
            style={{ margin: "0", padding: "0px 12px 12px 12px" }}
          >
            <h6 style={{ fontStyle: "italic", margin: "0" }}>
              Handmade happiness for your ears.
            </h6>
          </Col>
          {/* <Col className="text-center py-3" md={3}>
            <h6 style={{ fontStyle: "italic" }}>
              Handmade happiness for your ears.
            </h6>
          </Col> */}
        </Row>
      </Container>
      <h1 className="text-center py-3">Latest Products</h1>
      <div>
        <SearchBox />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="box-wra">
          {products.map((product) => (
            <Col className="bo" key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </main>
  );
};

export default ProductPage;
