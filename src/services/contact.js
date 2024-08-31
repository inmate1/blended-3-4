import { Contact } from '../db/models/Contact.js';

export const getContacts = (userId) => Contact.find({ userId });

export const createContact = (contact) => Contact.create(contact);
