/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 23:02:05
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 00:14:44
 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../constants.js";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"], //type of data fetch from api
  endpoints: (builder) => ({}),
});
