import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import PostPage from "./PostPage";
import HightLight from "./HighLight";
import { __getPost } from "../../redux/modules/mainThunk";
import { useDispatch, useSelector } from "react-redux";

const MainPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);
  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch]);

  const Posts = useSelector((state) => state.problems.post);
  return (
    <>
      <MainBody>
        <PostHeader>인기글</PostHeader>
        <HightLight />
        <PostHeader>
          모든 글
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
        </PostHeader>
        <PostBox>
          {Posts &&
            Posts.map((data, index) => (
              <PostPage
                key={index}
                id={index + 1}
                tier={data.tier[0] + data.tier.slice(1).toLowerCase()}
                title={data.title}
                date={data.modifiedAt.slice(5, 10)}
                like={data.likeNum}
                nickname={data.nickname}
              />
            ))}
        </PostBox>
      </MainBody>
    </>
  );
};
export default MainPost;
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
const PostBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
