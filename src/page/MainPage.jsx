import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostPage from "../components/PostPage";

const MainBody = styled.div`
  margin: 0 auto;
  width: 75%;
  height: 100%;
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  outline: 1px solid;
  padding: 10px 10px;
  font-size: 36px;
  font-family: "GmarketSansMedium";
  margin: 25px auto;
`;
const HighLightPostBox = styled.div`
  text-align: center;
  display: flex;
  flex-grow: 1;
  margin: 10px;
  padding: 25px 10px;
`;
const HighLightPost = styled.div`
  text-align: center;
  outline: 1px solid;
  display: box;
  flex-grow: 1;
  margin: 10px;
  padding: 100px;
`;
const PostBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
const MainPage = () => {
  const title_name = ["숫자의 합", "제곱 ㄴㄴ 수", "포챠코 조아"];
  return (
    <>
      <MainBody>
        <PostHeader>인기글</PostHeader>
        <HighLightPostBox>
          <HighLightPost>{title_name[0]}</HighLightPost>
          <HighLightPost>{title_name[1]}</HighLightPost>
          <HighLightPost>{title_name[2]}</HighLightPost>
        </HighLightPostBox>
        <PostHeader>
          모든 글
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
        </PostHeader>
        <PostBox>
          <PostPage
            id={3300}
            tier={"Silver"}
            title={title_name[0]}
            date={"11:10"}
            like={5}
            nickname={"맞왜틀"}
          />
          <PostPage
            id={3400}
            tier={"Gold"}
            title={title_name[1]}
            date={"11:00"}
            like={4}
            nickname={"요시"}
          />
          <PostPage
            id={3700}
            tier={"Ruby"}
            title={title_name[2]}
            date={"10:00"}
            like={1}
            nickname={"Pocchaco"}
          />
        </PostBox>
      </MainBody>
    </>
  );
};

export default MainPage;
