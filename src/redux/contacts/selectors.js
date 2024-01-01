import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectContacts = state => state.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
