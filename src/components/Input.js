import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.value,
      validationClass: "hidden",
    };
  }

  onChangeHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  onBlurHandler(event) {
    if (event.target.value.length > 3) {
      this.setState({ validationClass: "hidden" });
    } else {
      this.setState({ validationClass: "" });
    }
  }

  render() {
    return (
      <div className="input-container">
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.state.inputValue}
          onChange={this.onChangeHandler.bind(this)}
          onBlur={this.onBlurHandler.bind(this)}
        />
        <div className={`error-notif ${this.state.validationClass}`}>
          <span>Enter a valid {this.props.label}</span>
        </div>
      </div>
    );
  }
}

Input.defaultProps = {
  label: "",
  type: "text",
  name: "name",
  value: "",
};
