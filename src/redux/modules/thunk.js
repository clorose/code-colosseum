import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getUsers = createAsyncThunk(
  "users/getUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addUsers = createAsyncThunk(
  "users/addUsers",
  async (payload, thunkAPI) => {
    console.log("addUser", payload);
    try {
      const { data } = await axios.post("http://localhost:3001/users", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
