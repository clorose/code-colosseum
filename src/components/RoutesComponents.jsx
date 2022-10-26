import { useEffect } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import DetailPage from "../page/DetailPage";
import Login from "../page/Login";
import MainPage from "../page/MainPage";
import SignUp from "../page/SignUp";
import WritePage from "../page/WritePage";

const RoutesComponents = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("Access_Token");
  const { pathname } = useLocation();

  useEffect(() => {
    if (!token && pathname === "/write") {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
    if (token && pathname === "/Login") navigate("/");
    if (token && pathname === "/sign-up") navigate("/");
  }, [navigate, token, pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default RoutesComponents;
