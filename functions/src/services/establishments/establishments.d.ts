interface Image {
  url: string;
  alt?: string;
  captions?: string;
}

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

export interface Establishment {
  id?: string;
  name: string;
  location: string;
  descriptions: string;
  category: string;
  price: number;
  featuredImages?: Image[];
  onSale?: boolean;
  salePrice?: number;
  services?: string[];
  rating?: number;
  features?: string[];
}
