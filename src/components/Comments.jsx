import React from "react";
import styled from "styled-components";

const Comments = () => {
  return (
    <CommentBox>
      <Comment>
        <Input placeholder="댓글을 작성해보세요" type="text"></Input>
        <InputButton>입력하기</InputButton>
      </Comment>
      <CommentList>
        <div className="comment">
          <UserName>
            <div className="div">user 1</div>
          </UserName>
          <UserComment>
            <div className="div2">저도 정말 잘 풀었습니다</div>
          </UserComment>
        </div>
        <div className="commentButton">
          <button className="edit">수정</button>
          <button className="del">삭제</button>
        </div>
      </CommentList>
      <CommentList>
        <div className="comment">
          <UserName>
            <div className="div">user 2</div>
          </UserName>
          <UserComment>
            <div className="div2">맞는데 왜 틀렸다고 뜨지;</div>
          </UserComment>
        </div>
        <div className="commentButton">
          <button className="edit">수정</button>
          <button className="del">삭제</button>
        </div>
      </CommentList>
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
