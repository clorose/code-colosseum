import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    console.log("payload", payload);
    try {
      const data = await axios.post(
        `http://43.201.71.248:8080/api/login`,
        payload
      );
      console.log("pay", data);
      // .then((res) => {
      //   sessionStorage.setItem("token", res.data.data.accessToken);
      // });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
