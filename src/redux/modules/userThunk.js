import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/user/`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
