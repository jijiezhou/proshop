/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 13:01:36
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 14:55:47
 */
/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 13:01:36
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 13:33:29
 */
import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((i) => i._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === existItem._id ? item : i
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },

    removeFromCart: (state, action) => {
      //if id is want we wanted, do not return
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
    },
  },
});

//any function should export as action
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
