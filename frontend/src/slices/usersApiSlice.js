/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 19:12:20
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 19:14:16
 */
import { USERS_URL_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const usersApiSplice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL / auth,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSplice;
