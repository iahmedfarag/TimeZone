import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice.jsx";
import productsSlice from "./features/productsSlice.jsx";
import userSlice from "./features/userSlice.jsx";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    user: userSlice,
  },
});
