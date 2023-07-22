import React from "react";
import PropTypes from "prop-types";
import { Button } from './ContactList.Style'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <Button onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;