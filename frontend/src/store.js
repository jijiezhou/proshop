/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 22:50:08
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 00:17:06
 */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
