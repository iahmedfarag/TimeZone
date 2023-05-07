import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalStorage = () => {
  let whishlist = localStorage.getItem("whishlist");
  if (whishlist) {
    return JSON.parse(localStorage.getItem("whishlist"));
  } else {
    return [];
  }
};

const initialState = {
  isLoading: false,
  isError: false,
  whishlist_products: getLocalStorage(),
  totalItems: 0,
};

export const whishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    // ! add to whishlist function
    addToWhishlist: (state, { payload }) => {
      let cartTempProducts = [...state.whishlist_products];
      const exist = cartTempProducts.find((item) => item.id === payload.id);
      if (exist) {
        cartTempProducts = cartTempProducts.filter(
          (product) => product.id !== payload.id
        );
        state.whishlist_products = cartTempProducts;
        toast.success("Item Removed From WhishList!");
        return;
      }
      state.whishlist_products = [...cartTempProducts, payload];
      localStorage.setItem(
        "whishlist",
        JSON.stringify(state.whishlist_products)
      );
      toast.success("Product Added To WhishList!");
    },

    // ! remove item
    // removeItem: (state, { payload }) => {
    //   let tempCartProducts = [...state.whishlist_products];
    //   tempCartProducts = tempCartProducts.filter(
    //     (product) => product.id !== payload
    //   );
    //   state.whishlist_products = [...tempCartProducts];
    //   localStorage.setItem(
    //     "whishlist",
    //     JSON.stringify(state.whishlist_products)
    //   );
    //   toast.success("Item Removed From WhishList!");
    // },

    // ! clear cart
    clearWhishlist: (state) => {
      state.whishlist_products = [];
      localStorage.setItem(
        "whishlist",
        JSON.stringify(state.whishlist_products)
      );
    },
  },
});
export const { addToWhishlist, removeItem, clearWhishlist } =
  whishlistSlice.actions;
export default whishlistSlice.reducer;
