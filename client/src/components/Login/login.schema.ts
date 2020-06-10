import * as Yup from 'yup';

const LoginSchema: Yup.ObjectSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Username is required.')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
  password: Yup.string()
    .required('Password is required.')
    .min(6, 'Too Short!')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.')
    .max(64, 'Too Long!'),
});

export default LoginSchema;
