import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Login = () => {
  const navigate = useNavigate();
  return (
    <form>
      <Login_Box>
        <Log>로그인</Log>
        <Id>
          아이디 <Input type="text" />
        </Id>
        <Pw>
          비밀번호 <Input type="text" />
        </Pw>
        <ButtonBox>
          <Button onClick={() => navigate("/sign-up")}>회원가입</Button>
          <Button>로그인</Button>
        </ButtonBox>
      </Login_Box>
    </form>
  );
};

export default Login;

const Login_Box = styled.div`
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
  justify-content: space-between;
  width: 37%;
  margin: auto 34%;
`;

const Button = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
