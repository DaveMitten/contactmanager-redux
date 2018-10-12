import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACTS,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACTS,
    payload: contact
  };
};
