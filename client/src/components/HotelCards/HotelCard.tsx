import * as React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { Card, FeaturedImages, LikeButton, LikeButtonWrapper } from './styles';
import { heart, heartSolid } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { HotelDetails } from '../../types/response';

export interface HotelCard {
  card: HotelDetails;
}

export const Category = styled(Typography)<{ element: 'span' }>``;

const HotelCard: React.FunctionComponent<HotelCard> = ({ card }) => {
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
    <Card to={`/accommodation/details/${card.id}`}>
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
        >
          {like ? heartSolid : heart}
        </LikeButton>
      </LikeButtonWrapper>
      {!!card.category && <Typography element="span" variant="b2" content={card.category} />}
      {!!card.name && <Typography element="span" variant="b2" content={card.name} />}
      {!!card.descriptions && (
        <Typography element="p" variant="b3" content={transformLangText(card.descriptions, 180)} />
      )}
      {!!card.price && <Typography element="span" variant="h3" content={`From ${card.price}`} />}
    </Card>
  );
};

export default HotelCard;
