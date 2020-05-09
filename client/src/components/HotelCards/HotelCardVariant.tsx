import * as React from 'react';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { CardVariant, FeaturedImages, CardVariantLeft, CardVariantRight } from './styles';
import { HotelDetails } from './HotelCard';
import useIsMobile from '../../hooks/useIsMobile';

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
  const isMobile = useIsMobile();

  if (!id || !name) {
    return null;
  }

  return (
    <CardVariant to={`/accommodation/details/${id}`}>
      {!!featuredImages && (
        <CardVariantLeft>
          <FeaturedImages slides={featuredImages} />
        </CardVariantLeft>
      )}
      <CardVariantRight>
        {!!category && <Typography element="span" variant="b2" content={category} />}
        {!!name && <Typography element="span" variant="b2" content={name} />}
        {!!descriptions && (
          <Typography
            element="p"
            variant="b1"
            content={transformLangText(descriptions, isMobile ? 150 : 180)}
          />
        )}
        {!!price && <Typography element="span" variant="h3" content={`From ${price}`} />}
      </CardVariantRight>
    </CardVariant>
  );
};

export default HotelCardVariant;
