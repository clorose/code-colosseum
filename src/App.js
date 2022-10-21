import React from "react";
import DetailPage from "./page/DetailPage";
import Login from "./page/Login";
import MainPage from "./page/MainPage";
import SignUp from "./page/SignUp";
import WritePage from "./page/WritePage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
