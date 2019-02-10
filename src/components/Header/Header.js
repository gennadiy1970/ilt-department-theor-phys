import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
// import s from "./Header.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
// import ilt_common from "../../data/ilt_common";
import theor_phys_common from "../../data/theor_phys_common";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

class Header extends Component {
  state = { isToggleOn: false };
  hundleToggleNavbarCollapse = e => {
    this.setState({ isToggleOn: this.state.isToggleOn ? false : true });
  };
  render() {
    const classNavbarCollapse =
      "collapse navbar-collapse" + (this.state.isToggleOn ? " show" : "");
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow ">
        <Logo className="navbar-nav" margin={"mx-5"} size={"38"} />
        <a className="h5 mr-5" href="/">
          <FormattedMessage
            id={theor_phys_common.name.id}
            defaultMessage={theor_phys_common.name.defaultMessage}
            description={theor_phys_common.name.description}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.hundleToggleNavbarCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={classNavbarCollapse} id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <Nav />
            <LanguageSelector update={this.props.update} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
