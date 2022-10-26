import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload)
      const data = await axios.post(`http://43.201.71.248/api/login`, payload);
      sessionStorage.setItem("Access_Token", data.headers.access_token);
      const token = sessionStorage.getItem("Access_Token");
      console.log("data :", data);
      token === null
        ? alert("아이디,비밀번호가 일치하지 않습니다")
        : alert("로그인에 성공하셨습니다!");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("아이디,비밀번호가 일치하지 않습니다");

      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const initialState = {
//   isLogin: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginState: (state) => {
//       state.isLogin = true;
//     },
//     logoutState: (state) => {
//       state.isLogin = false;
//     },
//   },
//   extraReducers: {
//     [__loginUser.fulfilled]: (state, action) => {
//       state.isLogin = true;
//       alert("로그인 되었습니다!");
//     },
//     [__loginUser.rejected]: (state, action) => {
//       state.isLogin = false;
//       alert("아이디와 비밀번호를 확인해주세요.");
//     },
//   },
// });

// export default userSlice.reducer;
