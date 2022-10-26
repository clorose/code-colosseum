import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/mainThunk";

const HighLight = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);
  const BestPost = useSelector((state) => state.problems.posts);
  const title_name = [
    `${BestPost[0]?.title}`,
    `${BestPost[1]?.title}`,
    `${BestPost[2]?.title}`,
  ];
  return (
    <>
      <HighLightBox>
        <HighLightPost>{title_name[0]}</HighLightPost>
        <HighLightPost>{title_name[1]}</HighLightPost>
        <HighLightPost>{title_name[2]}</HighLightPost>
      </HighLightBox>
    </>
  );
};
export default HighLight;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  outline: 1px solid;
  padding: 10px 10px;
  font-size: 36px;
  font-family: "GmarketSansMedium";
  margin: 25px auto;
`;
const HighLightBox = styled.div`
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
