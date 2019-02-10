import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import s from "./LanguageSelector.module.css";

const countryOptions = [
  { key: "uk", value: "uk", flag: "ua", text: "Ukraine" },
  { key: "ru", value: "ru", flag: "ru", text: "Russian" },
  { key: "en", value: "en", flag: "uk", text: "English" }
];

class SelectExample extends Component {
  state = { value: "en" };

  componentDidMount() {
    if (typeof window !== "undefined") {
      const languageFromStorage = JSON.parse(
        localStorage.getItem("key-language")
      );
      const languageFromNavigator = navigator.language.split(/[-_]/)[0];
      this.setState({ value: languageFromStorage || languageFromNavigator });
    }
  }

  handleSubmit = (event, { value }) => {
    localStorage.setItem("key-language", JSON.stringify(value));
    this.setState({ value: value });
    const update = this.props.update;
    update(value);
  };

  render() {
    const { value } = this.state;
    return (
      <Select
        value={value}
        options={countryOptions}
        onChange={this.handleSubmit}
      />
    );
  }
}

export default SelectExample;
