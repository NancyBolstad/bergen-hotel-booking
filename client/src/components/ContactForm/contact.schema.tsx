import * as Yup from 'yup';

const ContactSchema: Yup.ObjectSchema = Yup.object().shape({
  clientName: Yup.string()
    .required('Required!')
    .min(2, 'Too short!')
    .max(50, 'Too long!'),
  email: Yup.string()
    .required('Required!')
    .email('Invalid email!'),
  message: Yup.string()
    .required('Required!')
    .min(50, 'Too short!')
    .max(300, 'Too long!'),
});

export default ContactSchema;
