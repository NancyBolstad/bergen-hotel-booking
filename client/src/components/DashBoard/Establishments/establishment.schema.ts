import * as Yup from 'yup';

const EstablishmentSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3),
  category: Yup.string().required(),
  description: Yup.string()
    .required()
    .max(300),
  location: Yup.string().required(),
  price: Yup.number()
    .required()
    .min(0),
  services: Yup.array(Yup.string()),
  //'services[0]': Yup.boolean(),
  //'features[0]': Yup.string().required(),
  // featuredImages: Yup.array().of(
  //   Yup.object()
  //     .shape({
  //       url: Yup.string().required(),
  //       alt: Yup.string(),
  //     })
  //     .required(),
  // ),
  // 'featuredImages[0]': Yup.object()
  //   .shape({
  //     url: Yup.string().required(),
  //     alt: Yup.string(),
  //   })
  //   .required(),
});

export default EstablishmentSchema;
