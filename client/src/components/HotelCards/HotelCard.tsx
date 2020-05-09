import * as React from 'react';
import styled from 'styled-components';
import { Image as ImageType } from '../../types/types';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { Card, FeaturedImages, LikeButton, LikeButtonWrapper } from './styles';
import { heart, heartSolid } from '../../util/icons';

type HotelCategories =
  | 'hotel'
  | 'bed and breakfast'
  | 'hostels'
  | 'tourist residence'
  | 'furnished accommodation';
type HotelServices =
  | 'free breakfast'
  | 'fitness centre'
  | 'private bathroom'
  | 'free wifi'
  | 'room service'
  | 'accessible room';
type Features =
  | 'fantastic cleanness'
  | 'wonderful location'
  | 'very comfortable bed'
  | 'helpful staff'
  | 'family friendly';

export interface HotelDetails {
  id?: string;
  name?: string;
  category?: HotelCategories;
  featuredImages?: ImageType[];
  descriptions?: string;
  location?: string;
  price?: number;
  onSale?: boolean;
  salePrice?: number;
  services?: HotelServices[];
  rating?: string;
  features?: Features[];
  reviews?: string[];
}

export const Category = styled(Typography)<{ element: 'span' }>``;

const HotelCard: React.FunctionComponent<HotelDetails> = ({
  id,
  name,
  category,
  featuredImages,
  descriptions,
  price,
  services,
  rating,
  features,
}) => {
  const [like, setLike] = React.useState(false);

  if (!id || !name) {
    return null;
  }
  return (
    <Card to={`/accommodation/details/${id}`}>
      {!!featuredImages && <FeaturedImages slides={featuredImages} />}
      <LikeButtonWrapper>
        <LikeButton
          variant="primary"
          size="small"
          isLiked={like}
          onClick={e => {
            e.preventDefault();
            setLike(!like);
          }}
        >
          {like ? heartSolid : heart}
        </LikeButton>
      </LikeButtonWrapper>
      {!!category && <Typography element="span" variant="b2" content={category} />}
      {!!name && <Typography element="span" variant="b2" content={name} />}
      {!!descriptions && (
        <Typography element="p" variant="b3" content={transformLangText(descriptions, 180)} />
      )}
      {!!price && <Typography element="span" variant="h3" content={`From ${price}`} />}
    </Card>
  );
};

export default HotelCard;
