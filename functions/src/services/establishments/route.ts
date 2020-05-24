import * as express from 'express';
import {
  getAllEstablishments,
  getOneEstablishment,
  createOneEstablishment,
  DeleteOneEstablishment,
} from './controllers';

const establishments = express();

establishments.get('/', getAllEstablishments);
establishments.get('/:id', getOneEstablishment);
establishments.post('/', createOneEstablishment);
establishments.delete('/:id', DeleteOneEstablishment);

export default establishments;
