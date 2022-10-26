import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <>
      <div>{id}</div>
    </>
  );
}

export default Detail;
