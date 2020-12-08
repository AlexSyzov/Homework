import React, { Component } from "react";
import { Form, FormInput, FormLabel, Button } from "../styled";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    onFormSubmission: PropTypes.func.isRequired,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!this.checkPhoneNumber(number)) {
      error({
        text: "Wrong phone number format. It must look like this: xxx-xx-xx",
        width: "300px",
        delay: 3000,
      });
      return;
    }

    this.setState({
      name: "",
      number: "",
    });

    this.props.onFormSubmission(name, number);
  };

  checkPhoneNumber = (number) => {
    const format = /\d{3}[-]\d{2}[-]\d{2}$/;

    const isValid = format.test(number);

    return isValid ? number : "";
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmission}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            value={name}
            name="name"
            onChange={this.handleInputChange}
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            value={number}
            name={"number"}
            onChange={this.handleInputChange}
          />
        </FormLabel>
        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    );
  }
}
