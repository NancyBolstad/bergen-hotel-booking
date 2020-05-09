import { HotelDetails, Root } from '../types/response';

export const APP_NAME: string = 'Holidaze Bergen';

export const API_BASE_URL: string = 'https://api.rawg.io/api/games';

export const FAVORITES_KEY: string = 'favorites';

export const PLACE_HOLDER: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const mockCardDetails: HotelDetails = {
  id: '',
  name: '',
  category: 'hotel',
  featuredImages: [],
  descriptions: '',
  location: '',
  price: 0,
  onSale: false,
  salePrice: 0,
  services: [],
  rating: 0,
  features: [],
  reviews: [],
};

export const mockCardDetailsResponse = {
  id: '',
  snapshot: {
    name: '',
    category: 'hotel',
    featuredImages: [],
    descriptions: '',
    location: '',
    price: 0,
    onSale: false,
    salePrice: 0,
    services: [],
    rating: 0,
    features: [],
    reviews: [],
  },
};

export const mockResponse: Root = {
  code: 0,
  data: [],
};

export const mockOptions = [
  {
    value: 'alphabetically',
    label: 'Alphabetically',
  },
  {
    value: 'popularity',
    label: 'Popularity',
  },
];
