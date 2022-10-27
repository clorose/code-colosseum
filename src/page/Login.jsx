import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __loginUser } from "../redux/modules/userThunk";
import styled from "styled-components";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    username: "",
    password: "",
  };

  const [loginUser, setLoginUser] = useState(initialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const onSubmit = () => {
    dispatch(__loginUser(loginUser)).then((rst) => {
      if (rst?.payload.data.success === false) {
        navigate("/login");
        console.log("rst", rst);
      } else {
        navigate("/");
      }
    });
  };

  return (
    <LoginBox>
      <Log>로그인</Log>

      <Id>
        <IdBox>아이디</IdBox>
        <Input
          name="username"
          value={loginUser.username}
          onChange={onChangeHandler}
          type="text"
        />
      </Id>
      <Pw>
        <IdBox>비밀번호</IdBox>
        <Input
          name="password"
          value={loginUser.password}
          onChange={onChangeHandler}
          type="password"
        />
      </Pw>
      <ButtonBox>
        <Button onClick={() => navigate("/sign-up")}>회원가입</Button>
        <Button onClick={onSubmit}>로그인</Button>
      </ButtonBox>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  width: 700px;
  height: 400px;
  margin: 150px auto;
  text-align: center;
`;
const Log = styled.div`
  width: 100%;
  margin: 40px 0px;
  height: 60px;
  font-size: 60px;
`;
const IdBox = styled.span`
  font-size: large;
  margin-right: 10px;
`;
const Id = styled.div`
  height: 40px;
  margin-bottom: 20px;
  padding: 20px 20px 0px 0px;
`;

const Pw = styled.div`
  padding-right: 36px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 30px;
  width: 250px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
  margin-left: 32px;
`;

const Button = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
