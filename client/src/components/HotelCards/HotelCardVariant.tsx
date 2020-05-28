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
  MiniImage,
  CategoryBadge,
  ServiceLabel,
} from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';
import { heart, heartSolid } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { Flex } from '../Flex';

interface Props {
  card: HotelDetails;
  miniCard?: boolean;
}

const HotelCardVariant: React.FunctionComponent<Props> = ({ card, miniCard }) => {
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
    <CardVariant
      to={`/accommodation/details/${card.id}`}
      aria-label={`View details about ${card.name}`}
    >
      {!!card.category && (
        <CategoryBadge
          element="span"
          variant="b1"
          content={card.category}
          textTransform="capitalize"
        />
      )}
      {!!card.featuredImages && !miniCard && (
        <CardVariantLeft>
          <FeaturedImages slides={card.featuredImages} />
        </CardVariantLeft>
      )}
      {!!card.featuredImages && miniCard && (
        <MiniImage src={card.featuredImages[0].url} alt={card.featuredImages[0].alt} />
      )}
      <CardVariantRight>
        {!miniCard && (
          <LikeButtonWrapper positionAbsolute>
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
        )}
        {!!card.services && (
          <Flex>
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
        {!!card.price && <Typography element="span" variant="h2" content={`From ${card.price}`} />}
        {!!card.descriptions && !miniCard && (
          <Typography
            element="p"
            variant="b1"
            content={transformLangText(card.descriptions, isMobile ? 150 : 180)}
          />
        )}
      </CardVariantRight>
    </CardVariant>
  );
};

export default HotelCardVariant;
