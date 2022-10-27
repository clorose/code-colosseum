import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comments from "../Comments";
import DetailPages from "./DetailPages";

function Details() {
  return (
    <>
      <DetailPages />
      <Comments />
    </>
  );
}

export default Details;
