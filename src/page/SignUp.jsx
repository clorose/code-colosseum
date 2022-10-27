import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __addUsers } from "../redux/modules/thunk";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    username: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    tier: "",
  };

  const [user, setUser] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // const regId = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
  // const regPw = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(__addUsers(user));
    setUser(initialState);
    navigate("/Login");
  };

  return (
    <form onSubmit={onSubmit}>
      <SignUpBox>
        <Sign_Up>회원가입</Sign_Up>
        <UserBox>
          <Span>아이디</Span>
          <Input
            name="username"
            placeholder="소문자,숫자 혼합 12자 이내"
            type="text"
            value={user.username}
            onChange={onChangeHandler}
          />
        </UserBox>
        <UserBox>
          <Span>비밀번호</Span>
          <Input
            name="password"
            onChange={onChangeHandler}
            placeholder="소문자, 숫자 혼합 32자 이내"
            type="password"
            value={user.password}
          />
        </UserBox>
        <UserBox>
          <Span>비밀번호 확인</Span>
          <Input
            name="passwordCheck"
            onChange={onChangeHandler}
            placeholder="비밀번호를 한번 더 입력해주세요."
            type="password"
            value={user.passwordCheck}
          />
        </UserBox>
        <UserBox>
          <Span>닉네임</Span>
          <Input
            name="nickname"
            onChange={onChangeHandler}
            type="text"
            value={user.nickname}
            placeholder="닉네임을 입력해 주세요."
          ></Input>
        </UserBox>
        <TierTag>티어</TierTag>
        <select name="tier" onChange={onChangeHandler} value={user.tier}>
          <option>BRONZE</option>
          <option>SILVER</option>
          <option>GOLD</option>
          <option>PLATINUM</option>
          <option>DIAMOND</option>
          <option>RUBY</option>
        </select>
        <ButtonBox>
          <Button>회원가입</Button>
        </ButtonBox>
      </SignUpBox>
    </form>
  );
};

export default SignUp;

const SignUpBox = styled.div`
  font-weight: 400px;
  width: 70%;
  height: 400px;
  margin: 120px auto;
  text-align: center;
`;

const Sign_Up = styled.div`
  width: 100%;
  margin: 30px 0px;
  height: 80px;
  font-size: 60px;
`;

const Input = styled.input`
  height: 30px;
  width: 250px;
  font-size: x-small;
  margin-right: 5%;
`;
const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 37%;
  margin: auto 34%;
`;

const Button = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;

const Span = styled.div`
  width: 100px;
  font-size: large;
  margin-right: 5px;
`;

const TierTag = styled.span`
  margin-right: 20px;
`;
