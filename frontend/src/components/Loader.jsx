/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 00:57:55
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 01:03:30
 */
import { Spinner } from "react-bootstrap";
import React from "react";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};
export default Loader;
