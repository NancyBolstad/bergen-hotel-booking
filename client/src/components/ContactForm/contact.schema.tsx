import * as Yup from 'yup';
import { YUP_SCHEMA_MESSAGE } from '../../util/constants';
import charactersLengthErrorMessage from '../../util/charactersLengthErrorMessage';
import requiredErrorMessage from '../../util/requiredErrorMessage';

const ContactSchema: Yup.ObjectSchema = Yup.object().shape({
  clientName: Yup.string()
    .required(requiredErrorMessage('Name'))
    .min(2, `${charactersLengthErrorMessage('Name', 2, 50)}`)
    .max(50, `${charactersLengthErrorMessage('Name', 2, 50)}`),
  email: Yup.string()
    .required(requiredErrorMessage('Email'))
    .email(YUP_SCHEMA_MESSAGE.email),
  message: Yup.string()
    .required(requiredErrorMessage('Message'))
    .min(50, `${charactersLengthErrorMessage('Message', 50, 1000)}`)
    .max(1000, `${charactersLengthErrorMessage('Message', 50, 1000)}`),
});

export default ContactSchema;
