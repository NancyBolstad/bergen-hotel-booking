import * as express from 'express';
import { getAllContact, createContact } from './controllers';

const contact = express();

contact.get('/', getAllContact);
contact.post('/', createContact);

export default contact;
