import * as Yup from 'yup';

const EstablishmentSchema = Yup.object().shape({
  name: Yup.string().required(),
  category: Yup.string().required(),
  descriptions: Yup.string().required(),
  location: Yup.string().required(),
  price: Yup.number().required(),
  services: Yup.array(Yup.string()).required(),
  //'services[0]': Yup.string().required(),
  features: Yup.array(Yup.string()).required(),
  //'features[0]': Yup.string().required(),
  featuredImages: Yup.array().of(
    Yup.object()
      .shape({
        url: Yup.string().required(),
        alt: Yup.string(),
      })
      .required(),
  ),
  // 'featuredImages[0]': Yup.object()
  //   .shape({
  //     url: Yup.string().required(),
  //     alt: Yup.string(),
  //   })
  //   .required(),
});

export default EstablishmentSchema;
