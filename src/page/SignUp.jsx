import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __addUsers } from "../redux/modules/thunk";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Password, setPassword] = useState(false);
  const [validate, setValidate] = useState(false);

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
    // if ( name = usern)

    setUser({
      ...user,
      [name]: value,
    });
  };

  // const regPw =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  // useEffect(()=> {
  //   if (regPw.test(user.password)){
  //     setPassword(true);
  //   }else{
  //     setPassword(false);
  //   }
  // },[user.password])

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(__addUsers(user));
    setUser(initialState);
    navigate("/Login");
  };

  return (
    <form onSubmit={onSubmit}>
      <SignUp_Box>
        <Sign_Up>회원가입</Sign_Up>
        <div>
          아이디
          <Input
            name="username"
            placeholder="아이디를 입력해주세요."
            type="text"
            value={user.username}
            onChange={onChangeHandler}
          />
          <Idcheck>아이디를 입력해주세요.</Idcheck>
        </div>
        <PW>
          비밀번호
          <Input
            name="password"
            onChange={onChangeHandler}
            placeholder="숫자, 특문 1회 , 영문 2개 이상 사용하여 8자리 이상 입력"
            type="password"
            value={user.password}
          />
          <Pwcheck>비밀번호 양식을 다시 한번 확인해주세요.</Pwcheck>
        </PW>
        <PwCheck>
          비밀번호 확인
          <Input
            name="passwordCheck"
            onChange={onChangeHandler}
            placeholder="비밀번호를 한번 더 입력해주세요."
            type="password"
            value={user.passwordCheck}
          />
          <Pw_check>비밀번호가 일치하지 않습니다.</Pw_check>
        </PwCheck>
        닉네임
        <Input
          name="nickname"
          onChange={onChangeHandler}
          type="text"
          value={user.nickname}
          placeholder="닉네임을 입력해 주세요."
        ></Input>
        <Nickname_check>이미 존재하는 닉네임입니다.</Nickname_check>
        <br></br>
        티어
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
      </SignUp_Box>
    </form>
  );
};

export default SignUp;

const SignUp_Box = styled.div`
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
`;

const PW = styled.div`
  margin-right: 17px;
`;
const PwCheck = styled.div`
  margin-right: 53px;
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

const Idcheck = styled.div`
  color: red;
  font-size: x-small;
  width: 400px;
  margin: auto;
  padding: 0px 103px 10px 0px;
`;

const Pwcheck = styled.div`
  color: red;
  font-size: x-small;
  width: 400px;
  margin: auto;
  padding: 0px 5px 10px 0px;
`;

const Pw_check = styled.div`
  color: red;
  font-size: x-small;
  width: 400px;
  margin: auto;
  padding: 0px 14px 10px 0px;
`;

const Nickname_check = styled.div`
  color: red;
  font-size: x-small;
  width: 400px;
  margin: auto;
  padding: 0px 14.3% 0px 0px;
`;
