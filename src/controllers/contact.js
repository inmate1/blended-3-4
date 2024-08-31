import { createContact, getContacts } from '../services/contact.js';

export const gerContactsController = async (req, res, next) => {
  const userId = req.user._id;

  const contacts = await getContacts(userId);

  res.status(200).json(contacts);
};

export const createContactConroller = async (req, res, next) => {
  const userId = req.user._id;
  const { name, number } = req.body;

  const contact = await createContact({ name, number, userId });

  res.status(201).json(contact);
};

export const deleteContactController = async (req, res, next) => {};
