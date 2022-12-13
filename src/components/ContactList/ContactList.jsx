import { ContactsList, ContactItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <span>&#128241;</span>
            {name} : {number}
            <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};
