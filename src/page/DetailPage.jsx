import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

function DetailPage() {
  const { id } = useParams();
  const uid = Number(id);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPost = async () => {
      dispatch(getPost(["", await axios.get().data]));
    };
  });
  return (
    <>
      {console.log(id)}
      <div></div>
    </>
  );
}

export default DetailPage;
