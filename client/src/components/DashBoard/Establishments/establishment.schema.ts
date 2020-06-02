import * as Yup from 'yup';

const EstablishmentSchema = Yup.object().shape({
  name: Yup.string()
    .required('Establishment name is required.')
    .min(3, 'Establishment name is too short.'),
  category: Yup.string().required('Category is required.'),
  descriptions: Yup.string()
    .required('Description is required.')
    .max(300, 'Description is too long'),
  location: Yup.string()
    .required('Location is required')
    .min(4, 'Invalid location'),
  price: Yup.number()
    .required('Price is required')
    .min(0, 'Invalid price.'),
  services: Yup.array(Yup.string()),
});

export default EstablishmentSchema;
