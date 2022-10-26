import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://43.201.71.248/"

export const __getPost = createAsyncThunk(
  "problems/getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL}api/problems`);
      console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const __addPost = createAsyncThunk(
  "problems/addPost",
  async (payload, thunkAPI) => {
    try {

    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);