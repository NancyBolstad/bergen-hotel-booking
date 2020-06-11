import * as React from 'react';
import Typography from '../Typography/Typography';
import transformLangText from '../../util/transformLangText';
import {
  CardVariant,
  FeaturedImages,
  CardVariantLeft,
  CardVariantRight,
  CategoryBadge,
  ServiceLabel,
} from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';
import { Flex } from '../Layout/';
import LikeButton from '../Button/LikeButton';

interface Props {
  card: HotelDetails;
  miniCard?: boolean;
  busy?: boolean;
  removed?: boolean;
  dropdown?: boolean;
}

const HotelCardVariant: React.FunctionComponent<Props> = ({
  card,
  miniCard,
  busy,
  removed,
  dropdown,
}) => {
  const isMobile = useIsMobile();

  return (
    <CardVariant
      href={`/accommodation/details/${card.id}`}
      aria-label={`View details about ${card.name}`}
      title={`View details about ${card.name}`}
      isMobile={isMobile}
      miniCard={miniCard}
      busy={busy}
      removed={removed}
    >
      {!!card.category && !dropdown && (
        <CategoryBadge
          element="span"
          variant="b2"
          content={card.category}
          textTransform="capitalize"
          miniCard={miniCard}
        />
      )}
      {!!dropdown ? null : (
        <CardVariantLeft>
          {!!card.featuredImages && !dropdown && <FeaturedImages slides={card.featuredImages} />}
        </CardVariantLeft>
      )}
      <CardVariantRight>
        {!miniCard && <LikeButton card={card} />}
        {!!dropdown && !!card.category && (
          <Typography
            element="span"
            variant={miniCard ? 'b1' : 'h2'}
            content={card.category}
            textTransform="capitalize"
          />
        )}
        {!!card.name && (
          <Typography
            element="h3"
            variant={miniCard ? 'b2' : 'h3'}
            content={card.name}
            textTransform="capitalize"
            isPrimaryColor
          />
        )}
        {!!card.location && (
          <Typography
            element="span"
            variant="b1"
            content={`Location: ${card.location}`}
            bottom={18}
          />
        )}
        {!!card.price && (
          <Typography element="span" variant="b2" content={`From ${card.price} NOK`} bottom={8} />
        )}
        {!!card.descriptions && (
          <Typography
            element="p"
            variant="b1"
            content={transformLangText(card.descriptions, isMobile ? 150 : 180)}
          />
        )}
        {!!card.services && (
          <Flex>
            {(card.services || []).map((service, index) => (
              <ServiceLabel
                element="span"
                variant="b2"
                content={service}
                key={`${card.id}-service-${index}`}
                textTransform="capitalize"
              />
            ))}
          </Flex>
        )}
      </CardVariantRight>
    </CardVariant>
  );
};

export default HotelCardVariant;
