/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-04 00:09:12
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-04 00:49:47
 */
import { Row, Col } from "react-bootstrap";
import products from "../products.js";
import Product from "../components/Product.jsx";
import React from "react";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
