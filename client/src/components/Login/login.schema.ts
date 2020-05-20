import * as Yup from 'yup';

const LoginSchema: Yup.ObjectSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
});

export default LoginSchema;
