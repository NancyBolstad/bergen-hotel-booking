import * as React from 'react';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import {
  CardVariant,
  FeaturedImages,
  CardVariantLeft,
  CardVariantRight,
  LikeButton,
  LikeButtonWrapper,
} from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';
import { heart, heartSolid } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';

interface Props {
  card: HotelDetails;
}

const HotelCardVariant: React.FunctionComponent<Props> = ({ card }) => {
  const isMobile = useIsMobile();
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
    <CardVariant to={`/accommodation/details/${card.id}`}>
      {!!card.featuredImages && (
        <CardVariantLeft>
          <FeaturedImages slides={card.featuredImages} />
        </CardVariantLeft>
      )}
      <CardVariantRight>
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
