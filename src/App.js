import React from "react";
import DetailPage from "./page/DetailPage";
import Login from "./page/Login";
import MainPage from "./page/MainPage";
import SignUp from "./page/SignUp";
import WritePage from "./page/WritePage";
import Comments from "./components/Comment/Comments";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/card" element={<Comments />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
