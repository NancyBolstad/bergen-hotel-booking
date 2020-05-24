import * as React from 'react';
//import styled, { css } from 'styled-components';
//import createMediaQuery from '../../../util/createMediaQuery';
import Typography from '../../../components/Typography';
import Section from '../helper-components/Section';
import Card from '../helper-components/Card';
import { Enquiry } from '../../../types/response';
import { Context } from '../../../context/GlobalContext';
import { HotelDetails } from '../../../types/response';

interface Props {
  enquiry: Enquiry;
}

const SingleEnquiry: React.FC<Props> = ({ enquiry }) => {
  const localContext = React.useContext(Context);
  const findHotelById: HotelDetails | undefined = localContext.default.find(establishment => {
    return establishment.id === enquiry.establishmentId;
  });

  return (
    <Section>
      <Card>
        <Typography variant="b1" element="p" content={enquiry.id} />
        <Typography variant="b2" element="p" content={enquiry.name} />
        <Typography variant="b2" element="p" content={enquiry.email} />
        <Typography variant="b1" element="p" content={enquiry.checkIn} />
        <Typography variant="b1" element="p" content={enquiry.checkOut} />
        {!!findHotelById && <Typography variant="b1" element="p" content={findHotelById.name} />}
      </Card>
    </Section>
  );
};

export default SingleEnquiry;
