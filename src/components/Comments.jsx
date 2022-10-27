import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Comment from "./Comment";
import { __addComments, __getComments } from "../redux/modules/thunk";

const Comments = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const problemId = parseInt(params.id);

  const initialState = {
    comment: "",
    problemId: problemId,
  };
  const [comment, setComment] = useState(initialState);

  useEffect(() => {
    dispatch(__getComments(problemId));
  }, [dispatch, problemId]);

  const commentList = useSelector((state) => state.comments.comments.data);
  console.log("리스트", commentList);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(__addComments(comment));
    setComment(initialState);
  };

  return (
    <CommentBox>
      <CommentStyle>
        <Input
          onChange={onChangeHandler}
          name="comment"
          value={comment.comment}
          placeholder="댓글을 작성해보세요"
          type="text"
        ></Input>
        <InputButton onClick={onClickHandler}>입력하기</InputButton>
      </CommentStyle>
      {commentList?.map((comment) => {
        return <Comment comment={comment} commentId={comment.commentId} />;
      })}
    </CommentBox>
  );
};

export default Comments;

const CommentBox = styled.div`
  border: 0px;
  margin: 100px auto;
  width: 800px;
  height: 900px;
  overflow: auto;
`;

const CommentStyle = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 700px;
  margin-right: 2%;
  border-radius: 5px;
  font-size: 20px;
`;

const InputButton = styled.button`
  width: 150px;
  border: 0px;
  border-radius: 7px;
  background-color: #807d7d;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;
