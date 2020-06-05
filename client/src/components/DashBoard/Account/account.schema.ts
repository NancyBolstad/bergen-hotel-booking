import * as Yup from 'yup';

const AccountSchema: Yup.ObjectSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!'),
  email: Yup.string().email('Invalid email!'),
  address: Yup.string(),
});

export default AccountSchema;
