import * as React from 'react';
import styled from 'styled-components';
import { Image as ImageType } from '../../types/types';
import Typography from '../Typography';
import transformLangText from '../../util/transformLangText';
import { ButtonInternal } from '../Button';
import { Card, FeaturedImages } from './styles';

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
  if (!id || !name) {
    return null;
  }
  return (
    <Card to={`/accommodation/details/${id}`}>
      {!!featuredImages && <FeaturedImages slides={featuredImages} />}
      {!!category && <Typography element="span" variant="b2" content={category} />}
      {!!descriptions && (
        <Typography element="span" variant="b2" content={transformLangText(descriptions, 220)} />
      )}
      {!!price && <Typography element="span" variant="h3" content={`From ${price}`} />}
      <ButtonInternal variant="primary" size="medium" to={`/accommodation/details/${id}`}>
        View Details
      </ButtonInternal>
    </Card>
  );
};

export default HotelCard;
