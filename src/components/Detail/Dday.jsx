import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { __detailPost, __getPost } from "../../redux/modules/mainThunk";

const Dday = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);

  useEffect(() => {
    dispatch(__detailPost(id));
  }, [dispatch]);
  const seconds = 1000;
  // 분
  const minute = seconds * 60;
  // 시
  const hour = minute * 60;
  // 일
  const day = hour * 24;
  // 주
  const week = day * 7;

  const Posts = useSelector((state) => state.problems.post);
  const modiAt = Posts?.modifiedAt;
  const Today = new Date();
  // const Today = "2022-10-24T20:38:51.228982";
  let Dday = Date.parse(Today) - Date.parse(modiAt);
  let format = "second";
  if (Dday / week > 1) {
    Dday = Math.floor(Dday / week);
    format = "week";
  } else if (Dday / day > 1) {
    Dday = Math.floor(Dday / day);
    format = "day";
  } else if (Dday / hour > 1) {
    Dday = Math.floor(Dday / hour);
    format = "hour";
  } else if (Dday / minute > 1) {
    Dday = Math.floor(Dday / minute);
    format = "minute";
  } else if (Dday / seconds > 1) {
    Dday = Math.floor(Dday / seconds);
    format = "seconds";
  }
  // console.log(Date.parse(modiAt));
  const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
  return (
    <>
      <div>{Dday && rtf.format(-Dday, format)}</div>
    </>
  );
};

export default Dday;
