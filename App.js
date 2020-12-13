import React, { Component } from "react";
import Section from "./components/Section";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const { contacts: prevContacts } = prevState;

    if (prevContacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (name, number) => {
    if (this.isInContacts(name)) {
      alert(`${name.trim()} is already in contacts!`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuidv4(), name, number }],
    }));
  };

  isInContacts = (name) => {
    return this.state.contacts.some(
      (contact) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );
  };

  handleContactDeletion = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getVisibleContacts = (e) => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onFormSubmission={this.handleFormSubmission} />
        </Section>

        <Section title="Contacts">
          <Filter filter={filter} onInputChange={this.handleInputChange} />
          <ContactList
            contacts={visibleContacts}
            onContactDeletion={this.handleContactDeletion}
          />
        </Section>
      </>
    );
  }
}
