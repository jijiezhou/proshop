/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 19:16:10
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 19:31:57
 */
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
export default FormContainer;
