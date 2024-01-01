import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contacts/contactsSlice';
import { selectContacts } from '../redux/contacts/selectors';
import { selectFilter } from '../redux/filter/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = id => {
    if (contacts) {
      dispatch(removeContact(id));
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(c =>
      c.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contactsArray = getVisibleContacts().reverse();
  return (
    <ul className="contacts-list">
      {contactsArray.map(({ name, number, id }) => (
        <li id={id} key={id} className="contacts-item">
          <p className="contacts-item-name">
            {name}:<span className="contacts-item-number">{number}</span>
          </p>
          <button
            onClick={() => {
              handleDelete(id);
            }}
            className="delete-btn"
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
