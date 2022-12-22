// import { Component } from 'react';
// import { nanoid } from 'nanoid';

// import { ForlLabel, Form, FormInput, SubmitButton } from './ContactForm.styled';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameId = nanoid();
//   numberId = nanoid();

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmitForm = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmitForm}>
//         <ForlLabel htmlFor={this.nameId}>
//           Name
//           <FormInput
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             id={this.nameId}
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </ForlLabel>
//         <ForlLabel htmlFor={this.numberId}>
//           Number
//           <FormInput
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             id={this.numberId}
//             value={this.state.number}
//             onChange={this.handleInputChange}
//           />
//         </ForlLabel>
//         <SubmitButton type="submit">Add contact</SubmitButton>
//       </Form>
//     );
//   }
// }

import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
  ForlLabel,
  ContactsForm,
  FormInput,
  SubmitButton,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const nameId = nanoid();
const numberId = nanoid();

export const ContactForm = ({ onFormSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onFormSubmit(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ContactsForm autoComplete="off">
        <ForlLabel htmlFor={nameId}>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameId}
            // onChange={this.handleInputChange}
          />
        </ForlLabel>
        <ForlLabel htmlFor={numberId}>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numberId}
            // onChange={this.handleInputChange}
          />
        </ForlLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactsForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
