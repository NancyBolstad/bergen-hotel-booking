import * as React from 'react';
import Typography from '../Typography/Typography';
import { HotelDetails } from '../../types/response';
import { CardDetailsWrapper } from './styles';
import Slider from '../Slider';

const CardDetails: React.FunctionComponent<HotelDetails> = ({ name, featuredImages }) => {
  return (
    <CardDetailsWrapper>
      {!!name && <Typography variant="h1" element="h2" top={32} bottom={26} content={name} />}
      {!!featuredImages && <Slider slides={featuredImages} large />}
    </CardDetailsWrapper>
  );
};

export default CardDetails;
