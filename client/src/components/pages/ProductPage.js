import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import axios from "axios";
// import products from "../products";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:8000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("localhost:8000/api/products")
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <main>
      <h1 className="text-center py-3">Latest Products</h1>
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
