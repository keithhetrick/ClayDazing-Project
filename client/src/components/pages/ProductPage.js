import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import products from "../products";

const ProductPage = () => {
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
