import * as Yup from 'yup';

const BookSchema: Yup.ObjectSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required!')
    .min(2, 'Too short!')
    .max(50, 'Too long!'),
  email: Yup.string()
    .required('Required!')
    .email('Invalid email!'),
  checkIn: Yup.date()
    .min(
      new Date(new Date().valueOf() - 1000 * 60 * 60 * 24),
      'Check-in date can not be earlier than today',
    )
    .default(function() {
      return new Date();
    }),
  checkOut: Yup.date()
    .min(Yup.ref('checkIn'), 'Check-out date should be later than check-in date')
    .default(function() {
      return new Date();
    }),
});

export default BookSchema;
