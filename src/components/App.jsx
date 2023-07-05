import React, { Component } from "react";
import ContactForm from './ContactBook/ContactForm';
import ContactList from './ContactBook/ContactList';
import Filter from './ContactBook/Filter';
import '../index.css';

class ContactBook extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: "",
};

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };


  handleSubmit = (newContact) => {
  const { contacts } = this.state;

  const isDuplicate = contacts.some((contact) =>
      contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Contact with the name "${newContact.name}" already exists.`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter  } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Книга контактів</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </>
    );
  }
}

export const App = () => {
  return (
    <div
      style={{
       display: 'grid',
        placeItems: 'center',
        height: '100vh',
        fontSize: 40,
        color: "#010101",
      }}
    >
      <ContactBook />
    </div>
  );
};