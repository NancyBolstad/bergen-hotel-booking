import * as React from 'react';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import {
  Card,
  FeaturedImages,
  LikeButton,
  LikeButtonWrapper,
  CategoryBadge,
  ServiceLabel,
} from './styles';
import { heart, heartSolid } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { HotelDetails } from '../../types/response';
import { Flex } from '../Flex';
import { IColors } from '../../types/theme';

export interface HotelCard {
  card: HotelDetails;
  extraSpace?: boolean;
  backgroundColor?: keyof IColors;
}

const HotelCard: React.FunctionComponent<HotelCard> = ({ card, extraSpace, backgroundColor }) => {
  const { favorites, dispatch } = React.useContext(Context);
  const [like, setLike] = React.useState<boolean>(() => {
    const found = favorites.find(item => {
      return item.id === card.id;
    });

    return found ? true : false;
  });

  function handleLikeDispatch() {
    setLike(!like);

    if (!like === true) {
      dispatch({
        type: Types.Like,
        payload: card,
      });
    } else {
      dispatch({
        type: Types.Dislike,
        payload: {
          id: card.id,
        },
      });
    }
  }
  return (
    <Card
      href={`/accommodation/details/${card.id}`}
      aria-label={`View details about ${card.name}`}
      title={`View details about ${card.name}`}
      extraSpace={extraSpace}
      backgroundColor={backgroundColor}
    >
      {!!card.featuredImages && <FeaturedImages slides={card.featuredImages} />}
      <LikeButtonWrapper>
        <LikeButton
          variant="primary"
          size="small"
          isLiked={like}
          onClick={e => {
            e.preventDefault();
            handleLikeDispatch();
          }}
          aria-label={`${like ? 'Dislike' : 'Like'} this accommodation`}
          title={`${like ? 'Dislike' : 'Like'} this accommodation`}
        >
          {like ? heartSolid : heart}
        </LikeButton>
      </LikeButtonWrapper>
      {!!card.category && <CategoryBadge element="span" variant="b1" content={card.category} />}
      {!!card.services && (
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
          element="span"
          variant="b1"
          content={`Location: ${card.location}`}
          bottom={18}
        />
      )}
      {!!card.price && (
        <Typography element="span" variant="h2" content={`From ${card.price}`} bottom={16} />
      )}
      {!!card.descriptions && (
        <Typography element="p" variant="b1" content={transformLangText(card.descriptions, 180)} />
      )}
    </Card>
  );
};

export default HotelCard;
