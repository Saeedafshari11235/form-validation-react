import React, { Component } from "react";
import Input from "./Input";
import "./formContainer.css";

export default class FormContainer extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <h2>Sign Up</h2>
          <Input label="Username" type="text" name="username"></Input>
          <Input label="Email" type="email" name="email"></Input>
          <Input label="Phone number" type="text" name="number"></Input>
          <Input label="Password" type="password" name="password"></Input>
          <Input type="submit" name="submit" value="Submit"></Input>
        </form>
      </div>
    );
  }
}
