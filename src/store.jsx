import productsSlice from "./features/productsSlice.jsx";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
