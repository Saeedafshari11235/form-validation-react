import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationClass: "hidden",
    };
  }


  onBlurHandler(event) {
    if (event.target.value.length > 3) {
      this.setState({ validationClass: "hidden" });
    } else {
      this.setState({ validationClass: "" });
    }
  }

  render() {
    let { label, type, name } = this.props;

    return (
      <div className="input-container">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={this.state.inputValue}
          onChange={this.props.setFormValue}
          onBlur={this.onBlurHandler.bind(this)}
        />
        <div className={`error-notif ${this.state.validationClass}`}>
          <span>Enter a valid {label}</span>
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
