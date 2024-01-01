import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors.js';
import Filter from './Filter';
import ContactList from './ContactList';

const ContactsWrapper = () => {
  const contacts = useSelector(selectContacts);
  return (
    <section className="contacts-wrapper">
      {(contacts.length === 0 && (
        <h1 style={{ marginTop: 80, fontSize: 44 }}>
          Ooops... No contacts here
        </h1>
      )) || (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </section>
  );
};

export default ContactsWrapper;
