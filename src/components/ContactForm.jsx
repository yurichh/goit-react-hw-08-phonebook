import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import { addContact } from '../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [state, setState] = useState({ name: '', number: '' });

  const checkNameForRepeat = contactName => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === contactName.toLowerCase()
    );
  };

  const handleAddContact = obj => {
    if (!state.name || !state.number) {
      Notiflix.Notify.warning(`Something missed`, {
        position: 'center-top',
        distance: '100px',
        fontSize: '40px',
        width: '600px',
      });
      return;
    }
    if (checkNameForRepeat(obj.name)) {
      Notiflix.Notify.warning(`${obj.name} is already in contacts`, {
        position: 'center-top',
        distance: '50px',
        fontSize: '40px',
        width: '600px',
      });
      return;
    }
    dispatch(addContact(obj));
    setState({ name: '', number: '' });
  };
  const createContactObj = e => {
    e.preventDefault();

    const newContactObj = {
      ...state,
      id: nanoid(),
    };

    handleAddContact(newContactObj);
  };
  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <form action="submit" className="add-form" autoComplete="on">
        <label htmlFor="name" className="add-label">
          Name
        </label>
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          required
          type="text"
          name="name"
          value={state.name}
          className="add-input"
        />
        <label htmlFor="number" className="add-label">
          Number
        </label>
        <input
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleChange}
          required
          type="tel"
          name="number"
          value={state.number}
          className="add-input"
        />
        <button className="add-btn" type="submit" onClick={createContactObj}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
