import { createSlice } from "@reduxjs/toolkit";
import { __addPost, __deletePost, __detailPost, __getPost } from "./mainThunk";

const initialState = {
  post: [{
    id: 0,
    title: "",
    nickname: "",
    tier: "Bronze",
    modifiedAt: "",
    likeNum: 0,
  }]
};

export const problems = createSlice({
  name: "problems",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__detailPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__detailPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addPost.fulfilled]: (state, action) => {
      state.post = [...state.post, action.payload.check.data];
    },
    [__addPost.rejected]: (state, action) => {
      state.error = action.payload.result;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.post = state.filter((b) => b.id !== action.payload.id);
    },
    [__deletePost.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default problems;