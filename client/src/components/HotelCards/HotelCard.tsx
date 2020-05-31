import * as React from 'react';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { Card, FeaturedImages, CategoryBadge, ServiceLabel } from './styles';
import { HotelDetails } from '../../types/response';
import { Flex } from '../Layout/';
import { IColors } from '../../types/theme';
import LikeButton from '../Button/LikeButton';
import { HorizontalSpacer, VerticalSpacer } from '../Layout';

export interface HotelCard {
  card: HotelDetails;
  extraSpace?: boolean;
  backgroundColor?: keyof IColors;
}

const HotelCard: React.FunctionComponent<HotelCard> = ({ card, extraSpace, backgroundColor }) => {
  return (
    <Card
      href={`/accommodation/details/${card.id}`}
      aria-label={`View details about ${card.name}`}
      title={`View details about ${card.name}`}
      extraSpace={extraSpace}
      backgroundColor={backgroundColor}
    >
      {!!card.featuredImages && <FeaturedImages slides={card.featuredImages} />}
      <VerticalSpacer topSpace="xs" bottomSpace="xs">
        <HorizontalSpacer>
          <LikeButton card={card} />
          {!!card.category && <CategoryBadge element="span" variant="b2" content={card.category} />}
          {!!card.name && (
            <Typography
              element="h3"
              variant="b2"
              content={card.name}
              isPrimaryColor
              textTransform="capitalize"
            />
          )}
          {!!card.location && (
            <Typography
              element="p"
              variant="b1"
              content={`Location: ${card.location}`}
              bottom={18}
            />
          )}
          {!!card.price && (
            <Typography element="span" variant="h2" content={`From ${card.price}`} bottom={16} />
          )}
          {!!card.descriptions && (
            <Typography
              element="p"
              variant="b1"
              content={transformLangText(card.descriptions, 180)}
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
        </HorizontalSpacer>
      </VerticalSpacer>
    </Card>
  );
};

export default HotelCard;
