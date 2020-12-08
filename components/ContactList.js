import React from "react";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onContactDeletion }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onContactDeletion={onContactDeletion}
        ></ContactListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactDeletion: PropTypes.func.isRequired,
};

export default ContactList;
