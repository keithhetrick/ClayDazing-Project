import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import { listProducts } from "../../actions/productActions";
import Product from "../Product";
import Message from "../Message";
import Loader from "../Loader";
import SearchBox from "../SearchBox";
// import ProductCarousel from "../ProductCarousel";
import CollectionsListPage from "./CollectionsListPage";

const ProductPage = () => {
  // const { id } = useParams();
  // const keyword = id.params.keyword;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <main>
      {/* {!keyword && <ProductCarousel />} */}
      {/* {<ProductCarousel />} */}
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            className="text-center py-3"
            md={12}
            style={{ margin: "0", padding: "0px 12px 12px 12px" }}
          >
            <h6 style={{ fontStyle: "italic", margin: "0" }}>
              Handmade happiness for your ears.
            </h6>
          </Col>
          <Row>
            <Col md={12}>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5fdaad402c1ded02b3775ccf/e44290b0-3b31-4a1c-a93b-07d913b9797a/IMG_0604.jpg?format=1500w"
                thumbnail
                fluid
              />
            </Col>
          </Row>
        </Row>
      </Container>
      <h2 className="text-center py-3">Latest Products</h2>
      <Container>{<CollectionsListPage />}</Container>
      <br />
      <div>
        <SearchBox />
      </div>
      <h4 className="text-center py-3">Browse All Products</h4>
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
