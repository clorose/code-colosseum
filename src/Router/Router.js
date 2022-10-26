import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "../components/Comments";
import MainPage from "../page/MainPage";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import WritePage from "../page/WritePage";
import DetailPage from "../page/DetailPage";
import Layout from "../components/Layout";

const Router = () => {
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
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
