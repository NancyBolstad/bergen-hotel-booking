import * as React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import PlainBanner from '../../components/Banner/PlainBanner';

interface Props {}

export const Contact: React.FunctionComponent<Props> = () => {
  return (
    <>
      <PlainBanner title="Contact Us" isTitleColorRed />
      <ContactForm />
    </>
  );
};

export default Contact;
