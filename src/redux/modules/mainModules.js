import { createSlice } from "@reduxjs/toolkit";
import { __getPost } from "./mainThunk";

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
      state.post = action.payload;
    }
  },
});

export default problems;