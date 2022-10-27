import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://43.201.71.248/"
/** Post 조회 */
export const __getPost = createAsyncThunk(
  "problems/getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL}api/problems`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
/** Best Post */
export const __bestPost = createAsyncThunk(
  "problems/bestPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL}api/problems/best`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
/** Detail page */
export const __detailPost = createAsyncThunk(
  "problems/detailPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL}api/problem/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
/** Post 글 쓰기 */
export const __addPost = createAsyncThunk(
  "problems/addPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${URL}api/auth/problem`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `${sessionStorage.getItem("Access_Token")}`,
          'withCredentials': true,
        }
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
/** Post 삭제 요청 */
export const __deletePost = createAsyncThunk(
  "problems/deletePost",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${URL}api/auth/problem`)
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
/** Post 변경 */
export const __editPost = createAsyncThunk(
  "problems/editPost",
  async (payload, thunkAPI) => {
    try {

    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);