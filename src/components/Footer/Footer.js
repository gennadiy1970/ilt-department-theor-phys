import React from "react";
import { FormattedDate, injectIntl } from "react-intl";

// import s from "./Footer.module.css";
// import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Footer = props => {
  const { intl } = props;
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <footer className="container footer">
        <div className="row d-flex justify-content-between">
          <Menu />
        </div>
      </footer>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div title={intl.formatMessage({ id: "footer.div.title" })}>
            <FormattedDate
              year="numeric"
              month="long"
              day="2-digit"
              value={Date.now()}
            />
          </div>
          <div>
            &copy; Corbulin G.M.{" "}
            <FormattedDate year="numeric" value={Date.now()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Footer);
