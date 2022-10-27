import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { __deleteComment, __updateComment } from "../redux/modules/thunk";

const Comment = ({ comment, commentId }) => {
  const dispatch = useDispatch();
  const [updateMode, setUpdateMode] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const UpdateBtn = () => {
    setUpdateMode(!updateMode);
  };

  const deleteBtn = (commentId) => {
    if (!inputValue === "") {
      alert("수정할 내용을 입력해주세요.");
      return;
    }
    if (!updateMode) {
      dispatch(__deleteComment(commentId));
    } else if (updateMode === true) {
      dispatch(__updateComment({ comment: inputValue.comment, commentId }));
      setInputValue("");
    }
    window.location.reload();
  };

  return (
    <CommentList key={comment.commentId}>
      <div className="comment">
        <UserName>
          <div className="div">{comment.nickname}</div>
        </UserName>
        {updateMode ? (
          <UserComment>
            <Input
              onChange={onChange}
              name="comment"
              value={inputValue.inputValue}
              placeholder={comment.comment}
              type="text"
            />
          </UserComment>
        ) : (
          <UserComment>
            <div className="div2">{comment.comment}</div>
          </UserComment>
        )}
      </div>
      <div className="commentButton">
        <button className="edit" onClick={() => UpdateBtn()}>
          {updateMode ? "취소" : "수정"}
        </button>
        <button className="del" onClick={() => deleteBtn(commentId)}>
          {updateMode ? "저장" : "삭제"}
        </button>
      </div>
    </CommentList>
  );
};

export default Comment;

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

const Input = styled.input`
  width: 50%;
  height: 30px;
  font-size: large;
`;
