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
  CategoryBadge,
  ServiceLabel,
  MiniImage,
} from './styles';
import { HotelDetails } from '../../types/response';
import useIsMobile from '../../hooks/useIsMobile';
import { heart, heartSolid, navigationArrow } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { Flex } from '../Flex';
import { ButtonLink } from '../Button/Button';

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
      href={`/accommodation/details/${card.id}`}
      aria-label={`View details about ${card.name}`}
      title={`View details about ${card.name}`}
      isMobile={isMobile}
      miniCard={miniCard}
    >
      {!!card.category && (
        <CategoryBadge
          element="span"
          variant="b1"
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
        {!!card.name && (
          <Typography
            element="h3"
            variant={miniCard ? 'b2' : 'h3'}
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
        {isMobile && (
          <ButtonLink
            href={`/accommodation/details/${card.id}`}
            aria-label={`View details about ${card.name}`}
            title={`View details about ${card.name}`}
            variant="readMore"
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
