import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const WriteBox = styled.div`
  width: 800px;
  height: 400px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid;
`;
const InputBox = styled.input`
  margin: 10px auto;
  width: 600px;
  height: 40px;
`;
const ButtonDiv = styled.div`
  display: space-between;
`;
const TextBox = styled.input`
  margin: 10px auto;
  width: 600px;
  height: 200px;
`;
const BtnStyle = styled.button`
  width: 100px;
  margin: 10px 10%;
  padding: 10px;
`;
const WritePage = () => {
  return (
    <form>
      <WriteBox>
        <>
          <InputBox placeholder="글 제목" />
        </>
        <>
          <InputBox placeholder="id" />
        </>
        <>
          <InputBox placeholder="파일 업로드" />
        </>
        <TextBox />
        <ButtonDiv>
          <Link to="/">
            <BtnStyle>글 쓰기</BtnStyle>
          </Link>
          <Link to="/">
            <BtnStyle>취소</BtnStyle>
          </Link>
        </ButtonDiv>
      </WriteBox>
    </form>
  );
};

export default WritePage;
