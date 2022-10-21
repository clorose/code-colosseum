import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <form>
      <SignUp_Box>
        <Sign_Up>회원가입</Sign_Up>
        <Id>
          아이디 <Input type="text" />
        </Id>
        <Pw>
          비밀번호 <Input type="text" />
        </Pw>
        <Pw_>
          비밀번호 확인 <Input type="text" />
        </Pw_>
        <ButtonBox>
          <Button onClick={() => navigate("/Login")}>회원가입</Button>
        </ButtonBox>
      </SignUp_Box>
    </form>
  );
};

export default SignUp;

const SignUp_Box = styled.div`
  width: 700px;
  height: 400px;
  margin: 150px auto;
  text-align: center;
`;

const Sign_Up = styled.div`
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
  padding-right: 37px;
  margin-bottom: 30px;
`;

const Pw_ = styled.div`
  padding-right: 74px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 30px;
  width: 250px;
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
  cursor: pointer;
`;
