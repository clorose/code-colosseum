import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostPage = (props) => {
  const LinkStyle = {
    color: "Black",
    textDecoration: "none",
  };
  return (
    <PostPageBox>
      <Link to={`/Detail/${props.id}`} style={LinkStyle}>
        <PostTitle>
          <TierImg src={require(`../asset/${props.tier}.webp`)} />[
          {props.tier[0]}]<Title>{props.title} </Title>
        </PostTitle>
      </Link>
      <PostInfoBox>
        <PostInfo> {props.nickname} </PostInfo>
        <PostInfo> {props.date} </PostInfo>
        <PostInfo> ❤️ {props.like} </PostInfo>
      </PostInfoBox>
    </PostPageBox>
  );
};

export default PostPage;

const PostPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid;
  margin: 5px;
`;
const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  padding: 0 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: auto 0;
`;
const PostInfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px 10px;
`;
const PostInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px 10px;
`;
const TierImg = styled.img`
  width: 64px;
  height: 64px;
`;
