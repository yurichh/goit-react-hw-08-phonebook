import ContactForm from 'components/ContactForm';
import React from 'react';
import ContactsWrapper from 'components/ContactsWrapper';
import { useSelector } from 'react-redux';
import { selectError } from '../redux/contacts/selectors';
import ErrorComp from 'components/ErrorComp';

const ContactsPage = () => {
  const error = useSelector(selectError);
  return error ? (
    <ErrorComp error={error} />
  ) : (
    <>
      <ContactForm />
      <ContactsWrapper />
    </>
  );
};

export default ContactsPage;
