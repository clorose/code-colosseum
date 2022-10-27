import { createSlice, current } from "@reduxjs/toolkit";
import {
  __getComments,
  __addComments,
  __updateComment,
  __deleteComment,
} from "./thunk";

const initialState = {
  comments: [],
};

export const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.comments = action.payload;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.comments.data.push(action.payload.data);
    },
    [__addComments.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {},
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {},
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
  },
});

export default comments;
