import { Component } from 'react';
import { Box } from '../Box';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export class ContactBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const invalidName = contacts.some(contact => contact.name === name);

    return invalidName
      ? alert(`${name} is already in contacts`)
      : this.setState({
          contacts: [...contacts, { id: nanoid(), name: name, number: number }],
        });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getvisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getvisibleContacts();

    return (
      <Box p="10px">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
