import React from "react";
import "./CurrentDate.css";

const CurrentDate = () => {
  let dateCurrent = new Date();
  let dateCurrentFormat = ` na dzień: 
  ${
    dateCurrent.getDate() <= 9
      ? `0${dateCurrent.getDate()}`
      : dateCurrent.getDate()
  }-${
    dateCurrent.getMonth() + 1 <= 9
      ? `0${dateCurrent.getMonth() + 1}`
      : dateCurrent.getMonth() + 1
  }-${dateCurrent.getFullYear()}`;
  return dateCurrentFormat;
};

export default CurrentDate;
