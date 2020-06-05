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

export const ESTABLISHMENTS_GALLERY: Image[] = [
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485091/holidaza/hotel/photo-1582295113435-dc69c937f1d8_lp4dxn.jpg',
    alt: 'Foo 1',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485091/holidaza/hotel/photo-1585821569272-21e611bb532f_askwlp.jpg',
    alt: 'Foo 2',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485086/holidaza/hotel/photo-1505773508401-e26ca9845131_oouq1e.jpg',
    alt: 'Foo 3',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485086/holidaza/hotel/photo-1560067174-c5a3a8f37060_j5ndjh.jpg',
    alt: 'Foo 4',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485090/holidaza/hotel/photo-1574643014728-053f16745e49_pcqxsy.jpg',
    alt: 'Foo 5',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485091/holidaza/hotel/photo-1587985064135-0366536eab42_fsexdb.jpg',
    alt: 'Foo 6',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485102/holidaza/hotel/photo-1554995207-c18c203602cb_p0bfit.jpg',
    alt: 'Foo 7',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485090/holidaza/hotel/photo-1578991624414-276ef23a534f_cwvorg.jpg',
    alt: 'Foo 8',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485087/holidaza/hotel/photo-1515362655824-9a74989f318e_g9tt9k.jpg',
    alt: 'Foo 9',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485103/holidaza/hotel/photo-1551525212-a1dc18871d4a_acp0md.jpg',
    alt: 'Foo 10',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485086/holidaza/hotel/photo-1504624720567-64a41aa25d70_vk1ysi.jpg',
    alt: 'Foo 11',
  },
  {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589485086/holidaza/hotel/photo-1496417263034-38ec4f0b665a_psbeaj.jpg',
    alt: 'Foo 12',
  },
];

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
