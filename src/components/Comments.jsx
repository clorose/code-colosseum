import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { __addComments, __getComments } from "../redux/modules/thunk";

const Comments = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const problemId = params.id;

  useEffect(() => {
    dispatch(__getComments(1));
  }, [dispatch, 1]);

  const commentList = useSelector((state) => state.comments.comments);
  const initialState = {
    comment: "",
    problemId: 1,
  };

  const [comment, setComment] = useState(initialState);
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
      <Comment>
        <Input
          onChange={onChangeHandler}
          name="comment"
          value={comment.comment}
          placeholder="댓글을 작성해보세요"
          type="text"
        ></Input>
        <InputButton onClick={onClickHandler}>입력하기</InputButton>
      </Comment>
      {commentList.map((commentList) => (
        <CommentList>
          <div className="comment">
            <UserName>
              <div className="div">user 2</div>
            </UserName>
            <UserComment>
              <div className="div2">{commentList.comment}</div>
            </UserComment>
          </div>
          <div className="commentButton">
            <button className="edit">수정</button>
            <button className="del">삭제</button>
          </div>
        </CommentList>
      ))}
      <CommentList>
        <div className="comment">
          <UserName>
            <div className="div">user 3</div>
          </UserName>
          <UserComment>
            <div className="div2">너무 힘들어요..</div>
          </UserComment>
        </div>
        <div className="commentButton">
          <button className="edit">수정</button>
          <button className="del">삭제</button>
        </div>
      </CommentList>
    </CommentBox>
  );
};

export default Comments;

const CommentBox = styled.div`
  border: 0px;
  margin: 300px auto;
  width: 800px;
  height: 900px;
  overflow: auto;
`;

const Comment = styled.div`
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

const CommentList = styled.div`
  height: 150px;
  width: 99%;
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  .comment {
    width: 80%;
  }
  .commentButton {
    width: 20%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .edit {
    background-color: gray;
    color: white;
    border: 0px;
    border-radius: 3px;
    width: 40%;
    height: 40px;
    cursor: pointer;
  }
  .del {
    background-color: gray;
    color: white;
    border: 0px;
    border-radius: 3px;
    width: 40%;
    height: 40px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const UserName = styled.div`
  width: 90%;
  height: 30%;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
`;

const UserComment = styled.div`
  height: 25%;
  width: 90%;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
`;
