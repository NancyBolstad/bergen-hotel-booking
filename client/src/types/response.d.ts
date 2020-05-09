type HotelCategories =
  | 'hotel'
  | 'bed and breakfast'
  | 'hostels'
  | 'tourist residence'
  | 'furnished apartment';
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
  id: string;
  name: string;
  category?: HotelCategories;
  featuredImages?: ImageType[];
  descriptions?: string;
  location?: string;
  price?: number;
  onSale?: boolean;
  salePrice?: number;
  services?: HotelServices[];
  rating?: number;
  features?: Features[];
  reviews?: string[];
}

export interface Root {
  code: number;
  data: HotelDetails[];
}
