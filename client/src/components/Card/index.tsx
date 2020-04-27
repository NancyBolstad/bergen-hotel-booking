import React from 'react';
import Typography from '../Typography';
import { ButtonInternal } from '../Button';
import { Result } from '../../types/data';
import { CardWrapper, CardImage, LikeButton } from './styles';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { heart, heartSolid } from '../../util/icons';

export interface Props {
  card: Result;
}

export const Card: React.FunctionComponent<Props> = ({ card }) => {
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
    <CardWrapper>
      <Typography
        element="h3"
        variant="h3"
        content={card.name}
        bottom={22}
        top={16}
        isPrimaryColor
      />
      {!!card.background_image && <CardImage src={card.background_image} alt={card.name} />}
      {!!card.released && (
        <Typography
          element="span"
          variant="h4"
          content={`Released: ${card.released}`}
          bottom={16}
          top={16}
          isPrimaryColor
        />
      )}
      {!!card.rating && (
        <Typography
          element="span"
          variant="h4"
          content={`Rating: ${card.rating}`}
          bottom={16}
          isPrimaryColor
        />
      )}
      <ButtonInternal variant="primary" size="medium" to={`/details/${card.id}`}>
        View Details
      </ButtonInternal>
      <LikeButton
        variant="primary"
        size="medium"
        onClick={e => {
          e.preventDefault();
          handleLikeDispatch();
        }}
        isLiked={like}
      >
        {like ? heartSolid : heart}
      </LikeButton>
    </CardWrapper>
  );
};

export default Card;
