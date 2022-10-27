import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  __deletePost,
  __detailPost,
  __likePost,
} from "../../redux/modules/mainThunk";
import styled from "styled-components";
import Dday from "./Dday";
import { Link } from "react-router-dom";

const DetailPages = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__detailPost(id));
  }, [dispatch]);
  const Posts = useSelector((state) => state.problems.detailpost);
  const onDeletePost = () => {
    dispatch(__deletePost(uid));
    alert("게시글 삭제");
    navigate("/");
  };
  const lovepost = () => {
    dispatch(__likePost(uid));
  };
  const imgURL = Posts.imgUrl;
  return (
    <>
      <DetailTitle>
        <TitleInfo>
          <TitleText>{Posts?.title}</TitleText>
          <Space>
            <div style={{ padding: "20px" }}>
              <TitleUser>작성자 : {Posts?.nickname}</TitleUser>
              <Dday />
              <Btn onClick={() => navigate("./DetailEdit")}>수정</Btn>
              <Btn onClick={onDeletePost}>삭제</Btn>
            </div>
            <TitleLike onClick={lovepost}>❤️ {Posts?.likeNum}</TitleLike>
          </Space>
        </TitleInfo>
        <DetailContent>{Posts?.content}</DetailContent>
        <Dtailimg src={`${imgURL}`} alt={`${imgURL}`} />
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
  padding: 10px 20px;
  font-family: "GmarketSansMedium";
  font-size: 36px;
`;
const TitleLike = styled.span`
  margin: 20px 20px;
  text-align: right;
  font-size: 24px;
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
  padding: 10px;
`;
const Btn = styled.button`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 0;
  outline: 0;
`;
export default DetailPages;
