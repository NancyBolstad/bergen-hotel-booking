import { Image } from '../types/response';
import { InfoListProps } from '../components/InfoList/InfoList';

export const APP_NAME: string = 'Holidaze Bergen';

export const FAVORITES_KEY: string = 'favorites';

export const PLACE_HOLDER: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const MAIN_NAV_LINKS: string[] = ['blog', 'about', 'contact'];

export const BLOG_LIST_SIZE: number = 6;

export const CATEGORIES: string[] = [
  'hotel',
  'bed and breakfast',
  'hostel',
  'tourist residence',
  'furnished apartment',
];

export const SERVICES: string[] = [
  'free breakfast',
  'fitness centre',
  'private bathroom',
  'free wifi',
  'room service',
  'accessible room',
];
export const API_ENDPOINT = {
  enquires: 'enquiries',
  contact: 'contact',
  establishment: 'establishments',
  blog: 'blog',
};

export const PLACEHOLDER_IMAGE: Image = {
  url: 'https://via.placeholder.com/300?text=Holidaze+Bergen',
  alt: 'Holidaze Bergen placeholder',
};

export const INFO_LIST: InfoListProps = {
  list: [
    {
      title: 'Lorem ipsum dolor',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Ac sapien rutrum',
      content:
        'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.',
    },
    {
      title: 'Pellentesque ac sapien',
      content: 'Pellentesque ac sapien ac felis accumsan rutrum. Lorem ipsum dolor sit amet.',
    },
  ],
};

export const UNSPLASH_API = `https://api.unsplash.com/photos/random?query=hotel&client_id=E7RoYSjXokhPwsHl2gwiNGA5Z-8c49x9S82mKP0TBMk&count=15`;
