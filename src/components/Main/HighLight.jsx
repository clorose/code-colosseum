import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __bestPost, __detailPost } from "../../redux/modules/mainThunk";

const HighLight = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);
  useEffect(() => {
    dispatch(__bestPost(id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(__detailPost(id));
  }, [dispatch]);
  const BestPost = useSelector((state) => state.problems.bestpost);
  const title_name = [
    `${BestPost[0]?.title}`,
    `${BestPost[1]?.title}`,
    `${BestPost[2]?.title}`,
  ];
  return (
    <>
      <HighLightBox>
        <Link
          to={`/${BestPost[0]?.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <HighLightPost>{title_name[0]}</HighLightPost>
        </Link>
        <Link
          to={`/${BestPost[1]?.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <HighLightPost>{title_name[1]}</HighLightPost>
        </Link>
        <Link
          to={`/${BestPost[2]?.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <HighLightPost>{title_name[2]}</HighLightPost>
        </Link>
      </HighLightBox>
    </>
  );
};
export default HighLight;

const HighLightBox = styled.div`
  text-align: center;
  display: flex;
  flex-grow: 1;
  margin: 10px;
  padding: 25px 10px;
`;
const HighLightPost = styled.div`
  background-position: center;
  display: block;
  width: 150px;
  height: 150px;
  flex: 1;
  text-align: center;
  outline: 1px solid;
  margin: 15px;
  padding: 100px 130px;
`;
