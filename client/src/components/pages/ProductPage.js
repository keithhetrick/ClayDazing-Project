import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import Message from "../Message";
import Loader from "../Loader";
import { listProducts } from "../../actions/productActions";

// import axios from "axios";
import products from "../products";

const ProductPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());

    // const fetchProducts = async () => {
    //   const res = await axios.get("http://localhost:8000/api/products");
    //   setProducts(res.data);
    // };
    // fetchProducts();
  }, [dispatch]);

  // const products = [];

  return (
    <main>
      <h1 className="text-center py-3">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default ProductPage;
