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
  MiniImage,
} from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';
import { navigationArrow, cross } from '../../util/icons';
import { Flex } from '../Layout/';
import Button, { ButtonLink } from '../Button/Button';
import LikeButton from '../Button/LikeButton';
import useDeleteRequest from '../../hooks/useDeleteRequest';
import { API_ENDPOINT } from '../../util/constants';

interface Props {
  card: HotelDetails;
  miniCard?: boolean;
  showReadMore?: boolean;
  editable?: boolean;
  busy?: boolean;
  removed?: boolean;
}

const HotelCardVariant: React.FunctionComponent<Props> = ({
  card,
  miniCard,
  showReadMore,
  busy,
  removed,
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
        {!!card.featuredImages && <FeaturedImages slides={card.featuredImages} />}
      </CardVariantLeft>
      <CardVariantRight>
        {!miniCard && <LikeButton card={card} />}
        {!!card.name && (
          <Typography
            element="h3"
            variant={miniCard ? 'b2' : 'h2'}
            content={card.name}
            textTransform="capitalize"
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
          <Typography
            element="span"
            variant={isMobile ? 'b2' : 'h4'}
            content={`From ${card.price}`}
            bottom={8}
          />
        )}
        {!!card.descriptions && (
          <Typography
            element="p"
            variant="b1"
            content={transformLangText(card.descriptions, isMobile ? 150 : 180)}
          />
        )}
        {!!card.services && !isMobile && (
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
