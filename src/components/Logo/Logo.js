import React from "react";
import { Link } from "react-router-dom";
// import s from "./Logo.module.css";

const Logo = ({ size, margin }) => {
  return (
    <a className={margin} href="https://ilt.kharkov.ua/.">
      <img src="./../images/ftintn.gif" alt="ILTPE logo" width={size} />
    </a>
  );
};

export default Logo;
