import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const notfound = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    maxWidth: "320px",
    width: "100%",
    textAlign: "center"
  };
  const title = {
    fontFamily: "sans-serif",
    fontSize: "100px",
    margin: 0,
    fontWeight: 900,
    color: "hsla(0,0%,0%, .1)",
    backgroundSize: "cover",
    zIndex: -1,
    backgroundPosition: "center"
  };
  const link = {
    cursor: "pointer",
    fontFamily: "sans-serif",
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    background: "#0046d5",
    display: "inline-block",
    padding: "15px 30px",
    borderRadius: "40px",
    color: "#fff",
    fontWeight: 700,
    boxShadow: "0 4px 15px -5px #0046d5"
  };
  return (
    <div style={{ ...notfound }}>
      <h1 style={{ ...title }}>Oops!</h1>
      <h2>404 - Page not found</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to={"/"} style={{ ...link }}>
        Go To Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
