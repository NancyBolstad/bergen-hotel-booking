import * as React from 'react';
import MainContent from '../../components/MainContent';
import ContactForm from '../../components/ContactForm';

interface Props {}

export const Contact: React.FunctionComponent<Props> = () => {
  return (
    <>
      <MainContent>
        <ContactForm />
      </MainContent>
    </>
  );
};

export default Contact;
