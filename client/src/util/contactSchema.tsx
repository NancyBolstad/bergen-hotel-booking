import * as yup from 'yup';

const contactSchema: yup.ObjectSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(2),
  lastName: yup
    .string()
    .required()
    .min(2),
  email: yup
    .string()
    .required()
    .email(),
  message: yup
    .string()
    .required()
    .min(10),
});

export default contactSchema;
