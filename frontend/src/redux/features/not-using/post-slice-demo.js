import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  item: {},
  status: "idle",
  error: null,
};

export const fetchPost = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    return response.json();
  }
);

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = [action.payload, ...state.items];
    });
    // builder.addCase(fetchPost.rejected, (state, action) => {
    //   state.status = "rejected";
    //   state.error = action.error.message;
    // });
  },
});

export default posts.reducer;
