import React, { Component } from "react";
import { Form, FormInput, FormLabel, Button } from "../styled";
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

    this.setState({
      name: "",
      number: "",
    });

    this.props.onFormSubmission(name, number);
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
          Number (xxx-xx-xx)
          <FormInput
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
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
