import * as express from 'express';
import { getAllContact, createContact, DeleteOneContact } from './controllers';

const contact = express();

contact.get('/', getAllContact);
contact.post('/', createContact);
contact.delete('/:id', DeleteOneContact);

export default contact;
