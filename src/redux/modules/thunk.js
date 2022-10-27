import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getUsers = createAsyncThunk(
  "users/getUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://43.201.71.248/api/signup");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addUsers = createAsyncThunk(
  "users/addUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://43.201.71.248/api/signup",
        payload
      );
      console.log("회원가입", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("회원가입 실패(양식에 맞춰 작성해주세요!)");
      console.log("에러", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComments = createAsyncThunk(
  "detail/__addComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `http://43.201.71.248/api/auth/comment/{problemId}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "detail/__getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://43.201.71.248/api/comment/{problemId}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "detail/__deleteComment",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      await axios.delete(`http://43.201.71.248/api/auth/comment/{commentId}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "detail/__updateComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://43.201.71.248/api/${payload.Id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
