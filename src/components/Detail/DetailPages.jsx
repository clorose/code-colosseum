import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { __detailPost } from "../../redux/modules/mainThunk";
import styled from "styled-components";
import Dday from "./Dday";

const DetailPages = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);
  useEffect(() => {
    dispatch(__detailPost(id));
  }, [dispatch]);
  const Posts = useSelector((state) => state.problems.post);
  const imgURL = Posts.imgUrl;
  console.log(Posts);
  return (
    <>
      <DetailTitle>
        <TitleInfo>
          <TitleText>{Posts?.title}</TitleText>
          <Space>
            <p>
              <TitleUser>작성자 : {Posts?.nickname}</TitleUser>
              <Dday />
              <Btn>수정</Btn>
              <Btn>삭제</Btn>
            </p>
            <TitleLike>❤️ {Posts?.likeNum}</TitleLike>
          </Space>
        </TitleInfo>
        <Dtailimg src={`${imgURL}`} alt={`${imgURL}`} />
        <DetailContent>{Posts?.content}</DetailContent>
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
  outline: 1px solid;
`;
const Space = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleText = styled.div`
  font-family: "GmarketSansMedium";
  font-size: 36px;
`;
const TitleLike = styled.span`
  margin: 20px 20px;
  text-align: right;
`;
const TitleUser = styled.span`
  font-size: 18px;
`;
const DetailContent = styled.div`
  font-size: 18px;
  margin: 10px;
`;
const Dtailimg = styled.img`
  position: relative;
  width: 50%;
  height: 50%;
`;
const Btn = styled.button`
  padding: 10px;
  margin: 10px;
`;
export default DetailPages;
