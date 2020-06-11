import { YUP_SCHEMA_MESSAGE } from './../../../util/constants';
import * as Yup from 'yup';
import charactersLengthErrorMessage from '../../../util/charactersLengthErrorMessage';

const AccountSchema: Yup.ObjectSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `${charactersLengthErrorMessage('Name', 3, 20)}`)
    .max(20, `${charactersLengthErrorMessage('Name', 3, 20)}`),
  email: Yup.string().email(YUP_SCHEMA_MESSAGE.email),
  address: Yup.string()
    .min(5, `${charactersLengthErrorMessage('Address', 5, 100)}`)
    .max(100, `${charactersLengthErrorMessage('Address', 5, 100)}`),
});

export default AccountSchema;
