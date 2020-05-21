import * as express from 'express';
import { getAllEnquiries, createEnquiry, getOneEnquiry, DeleteOneEnquiry } from './controllers';

const enquiries = express();

enquiries.get('/', getAllEnquiries);
enquiries.get('/:id', getOneEnquiry);
enquiries.post('/', createEnquiry);
enquiries.delete('/:id', DeleteOneEnquiry);

export default enquiries;
