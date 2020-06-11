import * as Yup from 'yup';
import charactersLengthErrorMessage from '../../util/charactersLengthErrorMessage';
import { YUP_SCHEMA_MESSAGE } from '../../util/constants';
import requiredErrorMessage from '../../util/requiredErrorMessage';

const BookSchema: Yup.ObjectSchema = Yup.object().shape({
  name: Yup.string()
    .required(requiredErrorMessage('Name'))
    .min(2, `${charactersLengthErrorMessage('Name', 2, 50)}`)
    .max(50, `${charactersLengthErrorMessage('Name', 2, 50)}`),
  email: Yup.string()
    .required(requiredErrorMessage('Email'))
    .email(YUP_SCHEMA_MESSAGE.email),
  checkIn: Yup.date()
    .min(new Date(new Date().valueOf() - 1000 * 60 * 60 * 24), YUP_SCHEMA_MESSAGE.checkInDate)
    .default(function() {
      return new Date();
    }),
  checkOut: Yup.date()
    .min(Yup.ref('checkIn'), YUP_SCHEMA_MESSAGE.checkOutDate)
    .default(function() {
      return new Date();
    }),
});

export default BookSchema;
