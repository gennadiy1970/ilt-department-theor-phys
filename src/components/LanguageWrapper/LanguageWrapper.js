import React, { Component } from "react";
import Layout from "../Layout/Layout";

import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_uk from "react-intl/locale-data/uk";
import locale_ru from "react-intl/locale-data/ru";

import messages_en from "../../translations/en.json";
import messages_ru from "../../translations/ru.json";
import messages_uk from "../../translations/uk.json";

addLocaleData([...locale_en, ...locale_uk, ...locale_ru]);

const messages = {
  uk: messages_uk,
  ru: messages_ru,
  en: messages_en
};

class LanguageWrapper extends Component {
  state = { language: "en" };
  componentDidMount() {
    if (typeof window !== "undefined") {
      const languageFromStorage = JSON.parse(
        localStorage.getItem("key-language")
      );
      const languageFromNavigator = navigator.language.split(/[-_]/)[0];
      this.setState({ language: languageFromStorage || languageFromNavigator });
    }
  }
  hundleUpdateState = value => {
    if (this.state.language !== value) {
      this.setState({ language: value });
    }
  };
  hundleUpdate = value => {
    this.hundleUpdateState(value);
  };
  render() {
    const { language } = this.state;
    return (
      <IntlProvider
        key={language}
        locale={language}
        messages={messages[language]}
      >
        <Layout update={this.hundleUpdate} content={this.props.children} />
      </IntlProvider>
    );
  }
}
export default LanguageWrapper;
