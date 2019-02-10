import React, { Component } from "react";
// import { Select } from "semantic-ui-react";
// import s from "./LanguageSelector.module.css";

const countryOptions = [
  { key: "uk", value: "uk", flag: "ua", text: "Ukraine" },
  { key: "ru", value: "ru", flag: "ru", text: "Russian" },
  { key: "en", value: "en", flag: "uk", text: "English" }
];

class LanguageSelector extends Component {
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

  handleSubmit = ({ target }) => {
    const value = target.dataset.lang;
    localStorage.setItem("key-language", JSON.stringify(value));
    this.setState({ value: value });
    const update = this.props.update;
    update(value);
  };

  render() {
    const { value } = this.state;
    return (
      // <Select
      //   value={value}
      //   options={countryOptions}
      //   onChange={this.handleSubmit}
      // />
      <div className="buttons-lang mx-5">
        <button
          type="button"
          className={
            value === "en" ? "btn btn-info mx-3" : "btn btn-secondary mx-3"
          }
          data-lang="en"
          onClick={this.handleSubmit}
        >
          EN
        </button>
        <button
          type="button"
          className={
            value === "uk" ? "btn btn-info mx-3" : "btn btn-secondary mx-3"
          }
          data-lang="uk"
          onClick={this.handleSubmit}
        >
          UA
        </button>
        <button
          type="button"
          className={
            value === "ru" ? "btn btn-info mx-3" : "btn btn-secondary mx-3"
          }
          data-lang="ru"
          onClick={this.handleSubmit}
        >
          RU
        </button>
      </div>
    );
  }
}

export default LanguageSelector;
