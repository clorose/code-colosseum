import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comments from "../Comments";
import DetailPages from "./DetailPages";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <>
      <div>{id}</div>
      <DetailPages />
      <Comments />
    </>
  );
}

export default Details;
