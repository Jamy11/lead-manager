import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  const state = thunkAPI.getState().auth;
  if (state.token) {
    axiosInstance.defaults.headers["Authorization"] = `Token ${state.token}`;
  }

  const response = await axiosInstance.get("/auth/user");
  return response.data;
});

export const loginUSer = createAsyncThunk(
  "/user/login",
  async ({ username, password }) => {}
);
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = state.user = null;
      });
  },
});

export default auth.reducer;
