import * as React from 'react';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { CardVariant, FeaturedImages, CardVariantLeft, CardVariantRight } from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';

interface Props {
  card: HotelDetails;
}

const HotelCardVariant: React.FunctionComponent<Props> = ({ card }) => {
  const isMobile = useIsMobile();

  console.log(22222222222222222887779);

  return (
    <CardVariant to={`/accommodation/details/${card.id}`}>
      {!!card.featuredImages && (
        <CardVariantLeft>
          <FeaturedImages slides={card.featuredImages} />
        </CardVariantLeft>
      )}
      <CardVariantRight>
        {!!card.category && <Typography element="span" variant="b2" content={card.category} />}
        {!!card.name && <Typography element="span" variant="b2" content={card.name} />}
        {!!card.descriptions && (
          <Typography
            element="p"
            variant="b1"
            content={transformLangText(card.descriptions, isMobile ? 150 : 180)}
          />
        )}
        {!!card.price && <Typography element="span" variant="h3" content={`From ${card.price}`} />}
      </CardVariantRight>
    </CardVariant>
  );
};

export default HotelCardVariant;
