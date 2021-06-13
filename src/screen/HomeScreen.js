import React, { useEffect, useState } from "react";
import product from "../product";
import { Row, Col } from "react-bootstrap";

import axios from "axios";
import Product from "../Components/Product";

const HomeScreen = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/");
      setProduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1> Latest product</h1>
      <Row>
        {product.map((product) => (
          <Col key={product._id} xl={3} lg={4} md={6} sm={12}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
