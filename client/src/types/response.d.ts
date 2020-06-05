//Auto transformation from Json to TypeScript: https://transform.tools/json-to-typescript

type HotelCategories =
  | 'hotel'
  | 'bed and breakfast'
  | 'hostel'
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

export interface Image {
  url: string;
  alt: string;
  caption?: string;
}

export interface HotelDetails {
  id: string;
  name: string;
  category: HotelCategories | '';
  featuredImages: ImageType[];
  descriptions: string;
  location: string;
  price?: number;
  onSale?: boolean;
  salePrice?: number;
  services?: string[];
  rating?: number;
  features?: Features[];
}

export interface Root {
  code: number;
  data: HotelDetails[];
}

export interface HotelDetailsRoot {
  code: number;
  data: HotelDetails;
}

export interface Data {
  id: string;
  category: string;
  descriptions: string;
  featuredImages: FeaturedImage[];
  features: string[];
  location: string;
  name: string;
  onSale: boolean;
  price: number;
  rating: number;
  salePrice: number;
  services: string[];
}

export interface FeaturedImage {
  alt: string;
  url: string;
}

export interface BlogList {
  code: number;
  data: Blog[];
}

export interface Blog {
  id: string;
  author?: string;
  categories?: string[];
  content?: string;
  createdAt?: string;
  images: Image[];
  intro?: string;
  title: string;
}

export interface BlogDetailsRoot {
  code: number;
  data: Blog;
}

export interface ContactResponse {
  code: number;
  data: Contact[];
}

export interface Contact {
  id: string;
  clientName: string;
  email: string;
  message: string;
  createdAt?: number;
}

export interface EnquiriesResponse {
  code: number;
  data: Enquiry[];
}

export interface Enquiry {
  id: string;
  checkIn: string;
  checkOut: string;
  email: string;
  establishmentId: string;
  name: string;
  createdAt?: number;
}
