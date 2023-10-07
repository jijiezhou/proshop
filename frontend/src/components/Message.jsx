/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 01:06:47
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 01:11:34
 */
import { Alert } from "react-bootstrap";
import React from "react";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};
export default Message;
