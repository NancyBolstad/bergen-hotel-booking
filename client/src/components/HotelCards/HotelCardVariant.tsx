import * as React from 'react';
import styled from 'styled-components';
import { Image as ImageType } from '../../types/types';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { ButtonInternal } from '../Button';
import { CardVariant, FeaturedImages } from './styles';
import { HotelDetails } from './HotelCard';

const HotelCardVariant: React.FunctionComponent<HotelDetails> = ({
  id,
  name,
  category,
  featuredImages,
  descriptions,
  price,
  services,
  rating,
  features,
}) => {
  if (!id || !name) {
    return null;
  }
  return (
    <CardVariant to={`/accommodation/details/${id}`}>
      {!!featuredImages && <FeaturedImages slides={featuredImages} />}
      <div>
        {!!category && <Typography element="span" variant="b2" content={category} />}
        {!!descriptions && (
          <Typography element="span" variant="b2" content={transformLangText(descriptions, 220)} />
        )}
        {!!price && <Typography element="span" variant="h3" content={`From ${price}`} />}
        <ButtonInternal variant="primary" size="medium" to={`/accommodation/details/${id}`}>
          View Details
        </ButtonInternal>
      </div>
    </CardVariant>
  );
};

export default HotelCardVariant;
