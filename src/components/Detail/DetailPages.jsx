import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { __getPost } from "../../redux/modules/mainThunk";
import styled from "styled-components";
import Dday from "./Dday";

const DetailPages = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id) - 1;
  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch]);
  const Posts = useSelector((state) => state.problems.post);

  return (
    <>
      <DetailTitle>
        <TitleInfo>
          <Space>
            <TitleText>{Posts[uid]?.title}</TitleText>
            <TitleLike>❤️ {Posts[uid]?.likeNum}</TitleLike>
          </Space>
          <TitleUser>{Posts[uid]?.nickname}</TitleUser>
        </TitleInfo>
        <Dday />
        <DetailContent>Ho</DetailContent>
      </DetailTitle>
    </>
  );
};

const DetailTitle = styled.div`
  outline: 1px solid;
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const TitleInfo = styled.div`
  margin-top: 10px;
`;
const Space = styled.div`
  justify-content: space-between;
`;
const TitleText = styled.div`
  font-family: "GmarketSansMedium";
  font-size: 36px;
`;
const TitleLike = styled.div`
  outline: 1px solid;
  padding: 10px;
  margin-top: 10px;
  text-align: right;
`;
const TitleUser = styled.div`
  font-size: 18px;
`;
const DetailContent = styled.div``;
export default DetailPages;
