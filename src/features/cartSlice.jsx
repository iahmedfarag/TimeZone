import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  isLoading: false,
  isError: false,
  cart_products: getLocalStorage(),
  totalItems: 0,
  tax: 9,
  subtotal: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ! add to cart function
    addToCart: (state, { payload }) => {
      let cartTempProducts = [...state.cart_products];
      const exist = cartTempProducts.find((item) => item.id === payload.id);
      if (exist) {
        cartTempProducts.map((item) => {
          if (item.id === payload.id) {
            item.amount++;
          }
        });
        state.cart_products = [...cartTempProducts];
        localStorage.setItem("cart", JSON.stringify(state.cart_products));
        return;
      }
      state.cart_products = [...cartTempProducts, payload];
      localStorage.setItem("cart", JSON.stringify(state.cart_products));
    },

    // ! toggle product amount
    toggleAmount: (state, { payload }) => {
      state.cart_products.map((product) => {
        if (product.id === payload.id) {
          if (payload.type === "change") {
            if (payload.value < 1) {
              return;
            }
            product.amount = payload.value;
          }
          if (payload.type === "inc") {
            product.amount = payload.value + 1;
          }
          if (payload.type === "dec") {
            if (product.amount <= 1) {
              return;
            }
            product.amount--;
          }
        }
      });

      localStorage.setItem("cart", JSON.stringify(state.cart_products));
    },

    // ! remove item
    removeItem: (state, { payload }) => {
      let tempCartProducts = [...state.cart_products];
      tempCartProducts = tempCartProducts.filter(
        (product) => product.id !== payload
      );
      state.cart_products = [...tempCartProducts];
      localStorage.setItem("cart", JSON.stringify(state.cart_products));
    },

    updateTotals: (state) => {
      const { totalItems, totalAmount } = state.cart_products.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalAmount += amount * price;
          return total;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );

      state.totalItems = totalItems;
      state.subtotal = totalAmount;
      state.totalAmount = totalAmount + state.tax;
    },
  },
});

export const { addToCart, toggleAmount, removeItem, updateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
