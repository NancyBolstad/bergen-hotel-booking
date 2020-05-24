import * as Yup from 'yup';

const LoginSchema: Yup.ObjectSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Username is required.')
    .min(6, 'Too Short!')
    .max(8, 'Too Long!'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Too Short!')
    .max(8, 'Too Long!'),
});

export default LoginSchema;
