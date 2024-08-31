import { Router } from 'express';
import { authenticate } from '../middlewares/autenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import {
  createContactConroller,
  deleteContactController,
  gerContactsController,
} from '../controllers/contact.js';
import { contactCreateShema } from '../validation/contact.js';

const contactRouret = Router();

contactRouret.get('/', authenticate, ctrlWrapper(gerContactsController));
contactRouret.post(
  '/',
  authenticate,
  validateBody(contactCreateShema),
  ctrlWrapper(createContactConroller),
);

contactRouret.delete(
  '/:id',
  authenticate,
  ctrlWrapper(deleteContactController),
);

export default contactRouret;
