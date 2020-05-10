import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HotelDetails } from '../../types/response';
import { Props as ListTypes } from './HotelCardsList';
import { HotelCardsList, HotelCardsListVariant } from './index';
import { createList } from '../../util/mockHelpers';
import { mockSlides } from '../Slider/story';

const mockHotelA: HotelDetails = {
  id: 'M5piLP6gm3z5ririq3v',
  name: 'Lorem ipsum Hotel',
  featuredImages: mockSlides,
  descriptions:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  price: 1089,
  category: 'hotel',
};

// const mockHotelB: HotelDetails = {
//   id: '-M5piLP7w4Ks1xtMeSh_',
//   name: 'Maecenas rhoncus',
//   featuredImages: mockSlides,
//   descriptions:
//     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
//   price: 889,
//   category: 'bed and breakfast',
// };

const mockList: ListTypes = {
  sectionTitle: 'Most popular hotels',
  backgroundColor: 'background',
  ctaText: 'Read more accommodations',
  ctaUrl: '/accommodations',
  list: createList(mockHotelA, 15),
};

export const HotelCardsListStory = <HotelCardsList {...mockList} />;
export const HotelCardsListVariantStory = <HotelCardsListVariant {...mockList} />;

storiesOf('Component/HotelList', module)
  .add('Default', () => HotelCardsListStory)
  .add('Variant', () => HotelCardsListVariantStory);
