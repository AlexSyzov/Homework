import React from "react";
import { ListItem, ListItemButton } from "../styled";

const ContactListItem = ({ id, name, number, onContactDeletion }) => {
  return (
    <ListItem>
      {name.trim()}: {number}
      <ListItemButton type="button" onClick={() => onContactDeletion(id)}>
        Delete
      </ListItemButton>
    </ListItem>
  );
};

export default ContactListItem;
