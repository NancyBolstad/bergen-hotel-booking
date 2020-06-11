import * as Yup from 'yup';
import charactersLengthErrorMessage from '../../../util/charactersLengthErrorMessage';
import { YUP_SCHEMA_MESSAGE } from './../../../util/constants';
import requiredErrorMessage from '../../../util/requiredErrorMessage';

const EstablishmentSchema = Yup.object().shape({
  name: Yup.string()
    .required(requiredErrorMessage('Name'))
    .min(2, `${charactersLengthErrorMessage('Establishment name', 2, 50)}`)
    .max(50, `${charactersLengthErrorMessage('Establishment name', 2, 50)}`),
  category: Yup.string().required(requiredErrorMessage('Category')),
  descriptions: Yup.string()
    .required(requiredErrorMessage('Description'))
    .min(300, `${charactersLengthErrorMessage('Description', 300, 1000)}`)
    .max(1000, `${charactersLengthErrorMessage('Description', 300, 1000)}`),
  location: Yup.string()
    .required(requiredErrorMessage('Location'))
    .min(4, `${charactersLengthErrorMessage('Location', 4, 50)}`)
    .max(50, `${charactersLengthErrorMessage('Location', 4, 50)}`),
  price: Yup.number()
    .typeError(YUP_SCHEMA_MESSAGE.numberTypeError)
    .required(requiredErrorMessage('Price'))
    .min(0, YUP_SCHEMA_MESSAGE.price),
  services: Yup.array(Yup.string()),
});

export default EstablishmentSchema;
