import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getLocalStorage = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

const initialState = {
  isLoading: false,
  user: getLocalStorage(),
};
const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(`${url}/auth/register`, user);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(`${url}/auth/login`, user);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user.token));
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user.token));
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
