import { createSlice } from "@reduxjs/toolkit";
import { __addPost, __bestPost, __deletePost, __detailPost, __getPost } from "./mainThunk";

const initialState = {
  post: [{
    id: 0,
    title: "",
    nickname: "",
    tier: "Bronze",
    modifiedAt: "",
    likeNum: 0,
  }],
  bestpost: [{
    id: 0,
    title: "",
    nickname: "",
    tier: "Bronze",
    modifiedAt: "",
    likeNum: 0,
  }],
  detailpost: [{
    id: 0,
    imgUrl: "",
    title: "",
    nickname: "",
    tier: "Bronze",
    modifiedAt: "",
    content: "",
    likeNum: 0,
    comments: [{
      comments: ""
    }]
  }]
};

export const problems = createSlice({
  name: "problems",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__detailPost.fulfilled]: (state, action) => {
      state.detailpost = action.payload;
    },
    [__detailPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__bestPost.fulfilled]: (state, action) => {
      state.bestpost = action.payload;
    },
    [__bestPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isSuccess = true;
    },
    [__addPost.rejected]: (state, action) => {
      state.error = action.payload.result;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.success = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default problems;