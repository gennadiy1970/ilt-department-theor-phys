import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = props => {
  return (
    <Fragment>
      <Header update={props.update} />
      <div className="container-fluid main">{props.content}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
