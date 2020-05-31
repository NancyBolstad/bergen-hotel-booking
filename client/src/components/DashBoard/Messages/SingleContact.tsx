import * as React from 'react';
// import styled, { css } from 'styled-components';
// import createMediaQuery from '../../../util/createMediaQuery';
import Typography from '../../../components/Typography/Typography';
import Section from '../helper-components/Section';
import Card from '../helper-components/Card';
import { Contact } from '../../../types/response';
//import transformLangText from '../../../util/transformLangText';

interface Props {
  contact: Contact;
}

const SingleContact: React.FC<Props> = ({ contact }) => {
  return (
    <Section>
      <Card>
        <Typography variant="b1" element="p" content={contact.id} />
        <Typography variant="b2" element="p" content={contact.clientName} />
        <Typography variant="b2" element="p" content={contact.email} />
      </Card>
    </Section>
  );
};

export default SingleContact;
