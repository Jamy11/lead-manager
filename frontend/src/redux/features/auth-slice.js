import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

const isBrowser = typeof window !== "undefined";

const initialState = {
  token: isBrowser ? localStorage.getItem("token") : null,
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

export const loginUser = createAsyncThunk("user/login", async (body) => {
  const response = await axiosInstance.post("/auth/login", body);
  return response.data;
});

export const logOutUser = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().auth;
    if (state.token) {
      axiosInstance.defaults.headers["Authorization"] = `Token ${state.token}`;
    }
    await axiosInstance.post("/auth/logout"); // Use POST instead of DELETE if your backend API requires it
    return {};
  }
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = state.user = null;
      })
      .addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
      })
      .addCase(logOutUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default auth.reducer;
