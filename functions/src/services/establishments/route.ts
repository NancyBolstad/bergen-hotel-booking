import * as express from 'express';
import { getAllEstablishments, createEstablishment, getOneEstablishment } from './controllers';

const establishments = express();

establishments.get('/', getAllEstablishments);
establishments.get('/:id', getOneEstablishment);
establishments.post('/', createEstablishment);

export default establishments;
