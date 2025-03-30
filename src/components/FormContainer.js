import React, { Component } from "react";
import Input from "./Input";
import "./formContainer.css";

export default class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.setFormValue = this.setFormValue.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

    this.state = {
      formInputs: [
        { label: "User Name", type: "text", name: "username" },
        { label: "Email", type: "text", name: "email" },
        { label: "Phone Number", type: "text", name: "phonenumber" },
        { label: "Password", type: "password", name: "password" },
        { type: "submit", name: "submit", value: "Submit" },
      ],
      formValues: {
        username: "",
        email: "",
        phonenumber: "",
        password: "",
      },
    };
  }

  setFormValue(event) {
    let { name, value } = event.target;

    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted", this.state.formValues);
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Sign Up</h2>
          {this.state.formInputs.map((item) => (
            <Input key={item.name} {...item} setFormValue={this.setFormValue} />
          ))}
        </form>
      </div>
    );
  }
}
