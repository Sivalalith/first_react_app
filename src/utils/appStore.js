import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// main store for our entire app
const store = configureStore({
  // root reducer of our store which is configured by providing all slices and their corresponding reducers
  reducer: {
    cart: cartReducer,
  },
});

export default store;
