import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  __deletePost,
  __detailPost,
  __editPost,
} from "../../redux/modules/mainThunk";
import styled from "styled-components";
import Dday from "./Dday";
import { Link } from "react-router-dom";

const DetailEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);
  useEffect(() => {
    dispatch(__detailPost(id));
  }, [dispatch]);
  const Posts = useSelector((state) => state.problems.detailpost);
  const initalState = {
    title: "",
    content: "",
    imgUrl: Posts.imgUrl,
  };
  const [post, setPost] = useState(initalState);

  const onSubmitHandler = (e) => {
    if (post.title === "" && post.content === "") {
      e.preventDefault();
      alert("내용을 입력하세요");
    } else {
      e.preventDefault();
      dispatch(__editPost({ post, uid }));
      alert("수정 완료");
      navigate(`/`);
      window.location.replace("/");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const imgURL = Posts.imgUrl;
  return (
    <>
      <DetailTitle>
        <TitleInfo>
          <TitleText
            placeholder={Posts?.title}
            value={post?.title}
            name="title"
            onChange={onChangeHandler}
          ></TitleText>
          <Space>
            <p>
              <TitleUser>작성자 : {Posts?.nickname}</TitleUser>
              <Dday />
              <Btn onClick={onSubmitHandler}>완료</Btn>
            </p>
            <TitleLike>❤️ {Posts?.likeNum}</TitleLike>
          </Space>
        </TitleInfo>
        <Dtailimg src={`${imgURL}`} alt={`${imgURL}`} />
        <DetailContent
          placeholder={Posts?.content}
          value={post?.content}
          name="content"
          onChange={onChangeHandler}
        ></DetailContent>
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
const TitleInfo = styled.form`
  outline: 1px solid;
`;
const Space = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleText = styled.input`
  font-family: "GmarketSansMedium";
  font-size: 36px;
  border: none;
  background-color: #f2f2f2;
`;
const TitleLike = styled.span`
  margin: 20px 20px;
  text-align: right;
`;
const TitleUser = styled.span`
  font-size: 18px;
`;
const DetailContent = styled.input`
  font-size: 18px;
  margin: 10px;
  border: none;
  background-color: #f2f2f2;
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
export default DetailEdit;
