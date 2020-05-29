import * as React from 'react';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import {
  CardVariant,
  FeaturedImages,
  CardVariantLeft,
  CardVariantRight,
  CategoryBadge,
  ServiceLabel,
  MiniImage,
} from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';
import { navigationArrow } from '../../util/icons';
import { Flex } from '../Flex';
import { ButtonLink } from '../Button/Button';
import LikeButton from '../Button/LikeButton';

interface Props {
  card: HotelDetails;
  miniCard?: boolean;
  showReadMore?: boolean;
}

const HotelCardVariant: React.FunctionComponent<Props> = ({ card, miniCard, showReadMore }) => {
  const isMobile = useIsMobile();

  return (
    <CardVariant
      href={`/accommodation/details/${card.id}`}
      aria-label={`View details about ${card.name}`}
      title={`View details about ${card.name}`}
      isMobile={isMobile}
      miniCard={miniCard}
    >
      {!!card.category && (
        <CategoryBadge
          element="span"
          variant="b2"
          content={card.category}
          textTransform="capitalize"
          miniCard={miniCard}
        />
      )}
      <CardVariantLeft>
        {!!card.featuredImages && !miniCard && <FeaturedImages slides={card.featuredImages} />}
        {!!card.featuredImages && miniCard && (
          <MiniImage src={card.featuredImages[0].url} alt={card.featuredImages[0].alt} />
        )}
      </CardVariantLeft>
      <CardVariantRight>
        {!miniCard && <LikeButton card={card} />}
        {!!card.name && (
          <Typography
            element="h3"
            variant={miniCard ? 'b2' : 'h2'}
            content={card.name}
            isPrimaryColor
            textTransform="capitalize"
          />
        )}
        {!!card.location && !miniCard && (
          <Typography
            element="span"
            variant="b1"
            content={`Location: ${card.location}`}
            bottom={18}
          />
        )}
        {!!card.price && (
          <Typography
            element="span"
            variant={isMobile ? 'b2' : 'h4'}
            content={`From ${card.price}`}
            bottom={8}
          />
        )}
        {!!card.descriptions && !miniCard && (
          <Typography
            element="p"
            variant="b1"
            content={transformLangText(card.descriptions, isMobile ? 150 : 180)}
          />
        )}
        {!!card.services && !isMobile && (
          <Flex wrap={true}>
            {(card.services || []).map((service, index) => (
              <ServiceLabel
                element="span"
                variant="b1"
                content={service}
                key={`${card.id}-service-${index}`}
                textTransform="capitalize"
              />
            ))}
          </Flex>
        )}
        {isMobile && showReadMore && (
          <ButtonLink
            href={`/accommodation/details/${card.id}`}
            aria-label={`View details about ${card.name}`}
            title={`View details about ${card.name}`}
            variant="secondaryVariant"
            size="small"
          >
            View Details {navigationArrow}
          </ButtonLink>
        )}
      </CardVariantRight>
    </CardVariant>
  );
};

export default HotelCardVariant;
