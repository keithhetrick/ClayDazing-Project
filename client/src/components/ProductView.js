import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("localhost:8000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Latest Products</h1>
      <section>
        <p>{products}</p>
      </section>
    </main>
  );
};

export default ProductView;
