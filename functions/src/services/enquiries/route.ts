import * as express from 'express';
import { getAllEnquiries, createEnquiry, getOneEnquiry } from './controllers';

const enquiries = express();

enquiries.get('/', getAllEnquiries);
enquiries.get('/:id', getOneEnquiry);
enquiries.post('/', createEnquiry);

export default enquiries;
