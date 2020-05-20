import * as Yup from 'yup';

const LoginSchema: Yup.ObjectSchema = Yup.object().shape({
  userName: Yup.string()
    .min(6, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
});

export default LoginSchema;
