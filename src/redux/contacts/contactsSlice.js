import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (_, action) => action.payload)
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
        return state;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      }),
});
