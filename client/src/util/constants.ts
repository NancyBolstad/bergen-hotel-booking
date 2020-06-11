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

export const COPY_RIGHTS: string = '© 2020 - Developed By Nancy Bolstad';

export const PAGE_HERO_IMG = {
  url:
    'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589114470/holidaza/photo-1580946443359-1126222f9224_fjvl7g.jpg',
  alt: 'Bergen scenery',
};

export const gird = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const CAMPAIGN_A = {
  backgroundImage: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485086/holidaza/hotel/photo-1496417263034-38ec4f0b665a_psbeaj.jpg',
    alt: 'campaign image for hostels',
  },
  text: 'Popular Budget Hostels',
  redirectLink: `/accommodations?category=hostel&name=&service=`,
};

export const CAMPAIGN_B = {
  backgroundImage: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/q_auto:eco/v1591865909/holidaza/photo-1517833969405-d4a24c2c8280_j3wnle.jpg',
    alt: 'campaign image for breakfast',
  },
  text: 'Best Buffet Breakfast',
  redirectLink: `/accommodations?category=&name=&service=free%20breakfast`,
};

export const CAMPAIGN_C = {
  backgroundImage: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485087/holidaza/hotel/photo-1535209252068-f498eac4aaa3_bhdmee.jpg',
    alt: 'campaign image for hotels',
  },
  text: 'Best Luxury Hotels',
  redirectLink: `/accommodations?category=hotel&name=&service=`,
};

export const FLEX_BANNER_A = {
  title: 'Stories from Bergen',
  descriptions:
    'Stay updated with the latest travel stories, tips and insights shared by our community.',
  figure: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589461864/holidaza/photo-1520769669658-f07657f5a307_kshoqw.jpg',
    alt: 'Stories from bergen',
  },
  buttonText: 'Read travel blogs',
  redirectLink: '/blog',
};

export const FLEX_BANNER_B = {
  title: 'Why should you booking with us',
  descriptions: 'Our holiday booking system provides the best accommodations at the best price.',
  figure: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/q_29/v1590658612/holidaza/bruce-mars-ieIY61ZHhs8-unsplash_uejrjp.jpg',
    alt: 'Services illustration',
  },
  buttonText: 'More about us',
  redirectLink: '/about',
};

export const ABOUT_A = {
  title: 'Who are we',
  descriptions:
    'Our workers are down-to-earth, trustworthy and reliable. With us you can focus on enjoying the stay, and rest assured that your booked hotel will fullfil your expectations.',
  figure: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/q_auto:eco/v1591866991/holidaza/photo-1522202176988-66273c2fd55f_1_mqvkmg.jpg',
    alt: 'Our company',
  },
  buttonText: 'Explore our services',
  redirectLink: '/accommodations?category=&name=&service=',
};

export const ABOUT_B = {
  title: 'Our Stories',
  descriptions:
    'Stay updated with the latest travel stories, tips and insights shared by our community.',
  figure: {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/q_auto:eco/v1589461866/holidaza/photo-1577453190736-43ac18f220e0_fj21l9.jpg',
    alt: 'Bergen scenery',
  },
  buttonText: 'Read our stories',
  redirectLink: '/accommodations?category=&name=&service=',
};
