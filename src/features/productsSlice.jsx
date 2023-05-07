import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  all_products: [],
  single_product: {},
  filtered_products: [],
  brands: [],
};

// ! get men watches
export const getMenWatches = createAsyncThunk(
  "products/getMenWatches",
  async (_, thunkAPI) => {
    try {
      const res = await axios(
        "https://dummyjson.com/products/category/mens-watches"
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ! get single product
export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`https://dummyjson.com/products/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // ! sort products
    sort: (state, { payload }) => {
      state.filtered_products = [...state.all_products];
      if (payload.sort === "newest") {
        let tempProducts = [...state.all_products];
        state.filtered_products = [...tempProducts];
      }
      if (payload.sort === "highest-price") {
        let tempProducts = [...state.all_products];
        tempProducts.sort((a, b) => b.price - a.price);
        state.filtered_products = [...tempProducts];
      }
      if (payload.sort === "lowest-price") {
        let tempProducts = [...state.all_products];
        tempProducts.sort((a, b) => a.price - b.price);
        state.filtered_products = [...tempProducts];
      }
      if (payload.type === "brand") {
        if (payload.sort === "All") {
          state.filtered_products = [...state.all_products];
          return;
        }
        let tempProducts = [...state.all_products];
        tempProducts = tempProducts.filter(
          (item) => item.brand === payload.sort
        );
        state.filtered_products = [...tempProducts];
      }
    },

    // ! get unique brands
    getBrands: (state) => {
      let unqBrands = [...new Set(state.all_products.map((prd) => prd.brand))];
      state.brands = [...unqBrands];
    },
  },
  extraReducers: (builder) => {
    builder
      // ! getMenWatches
      .addCase(getMenWatches.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenWatches.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.all_products = [...payload.products];
      })
      .addCase(getMenWatches.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      // ! getSingleProduct
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.single_product = payload;
      })
      .addCase(getSingleProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { sort, getBrands } = productsSlice.actions;
export default productsSlice.reducer;
