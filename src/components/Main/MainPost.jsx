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
            <Btn>글쓰기</Btn>
          </Link>
        </PostHeader>
        <PostBox>
          {Posts &&
            Posts.map((data, index) => (
              <PostPage
                key={data.id}
                id={data.id}
                tier={
                  data.tier[0].toUpperCase() + data.tier.slice(1).toLowerCase()
                }
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
  outline: 2px solid;
  padding: 10px 10px;
  font-size: 36px;
  font-family: "GmarketSansMedium";
  margin: 30px auto;
  padding: 10px 30px;
`;
const PostBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Btn = styled.div`
  margin: 20px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`;
