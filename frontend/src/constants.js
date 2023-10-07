/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 22:56:27
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-06 22:57:35
 */
export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";
export const PRODUCTS_URL = "/api/products";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
