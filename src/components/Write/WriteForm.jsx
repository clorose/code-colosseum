import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __addPost } from "../../redux/modules/mainThunk";

const WritePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initalState = {
    title: "",
    content: "",
  };

  const [post, setPost] = useState(initalState);
  const [img, setImg] = useState("");
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log(post);
  };
  const saveFileImage = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    let postImg = document.getElementById("img_file");
    formData.append("title", post.title);
    formData.append("content", post.content);
    formData.append("file", postImg.files[0]);
    dispatch(__addPost(formData));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <WriteBox>
        <div>
          <InputBox
            placeholder="글 제목"
            name="title"
            value={post.title}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type="file"
            id="img_file"
            accept="image/*"
            onChange={saveFileImage}
          />
        </div>
        <TextBox
          name="content"
          value={post.content}
          onChange={onChangeHandler}
        />
        <ButtonDiv>
          <BtnStyle>글 쓰기</BtnStyle>
          <Link to="/">
            <BtnStyle>취소</BtnStyle>
          </Link>
        </ButtonDiv>
      </WriteBox>
    </form>
  );
};
const WriteBox = styled.div`
  width: 800px;
  height: 400px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid;
`;
const InputBox = styled.input`
  margin: 10px auto;
  width: 600px;
  height: 40px;
`;
const ButtonDiv = styled.div`
  display: space-between;
`;
const TextBox = styled.input`
  margin: 10px auto;
  width: 600px;
  height: 200px;
`;
const BtnStyle = styled.button`
  width: 100px;
  margin: 10px 10%;
  padding: 10px;
`;
export default WritePost;
