import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      const { data } = await axios.post('/contacts', contact);
      console.log('data', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactID, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      await axios.delete(`/contacts/${contactID}`);
      return contactID;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
