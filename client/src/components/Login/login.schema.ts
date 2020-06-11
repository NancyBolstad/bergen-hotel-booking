import * as Yup from 'yup';
import charactersLengthErrorMessage from '../../util/charactersLengthErrorMessage';
import requiredErrorMessage from '../../util/requiredErrorMessage';

const LoginSchema: Yup.ObjectSchema = Yup.object().shape({
  userName: Yup.string()
    .required(requiredErrorMessage('User name'))
    .min(6, `${charactersLengthErrorMessage('User name', 6, 20)}`)
    .max(20, `${charactersLengthErrorMessage('User name', 6, 20)}`),
  password: Yup.string()
    .required(requiredErrorMessage('Password'))
    .min(6, `${charactersLengthErrorMessage('Password', 6, 64)}`)
    .max(64, `${charactersLengthErrorMessage('Password', 6, 64)}`),
});

export default LoginSchema;
