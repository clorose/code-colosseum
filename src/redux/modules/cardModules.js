import { createSlice } from "@reduxjs/toolkit";
import { __getComments, __addComments } from "./thunk";

const initialState = {
  comments: [{}],
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
      state.comments.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default comments;
