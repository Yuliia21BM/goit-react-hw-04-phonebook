import { useState, useEffect } from 'react';
import { Box } from './Box';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const LS_KEY = 'savedContacts';

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts === []) return;
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const invalidName = contacts.some(contact => contact.name === name);

    return invalidName
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContact => [
          ...prevContact,
          { id: nanoid(), name: name, number: number },
        ]);
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getvisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getvisibleContacts();

  return (
    <Box p="10px">
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        visibleContacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};
