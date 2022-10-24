import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getUsers = createAsyncThunk(
  "users/getUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://43.201.71.248:8080/api/signup");
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
        "http://43.201.71.248:8080/api/signup",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComments = createAsyncThunk(
  "comments/addComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `http://43.201.71.248:8080/api/auth/comment/${payload.problemId}`,
        payload.comment
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "comments/getComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://43.201.71.248:8080/api/comment/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
