import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HotelDetails } from '../../types/response';
import { Props as ListTypes } from './HotelCardsList';
import { HotelCardsList } from './index';
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
  location: 'bergen street',
};

const mockList: ListTypes = {
  sectionTitle: 'Most popular hotels',
  backgroundColor: 'background',
  ctaText: 'Read more accommodations',
  ctaUrl: '/accommodations',
  list: createList(mockHotelA, 15),
};

export const HotelCardsListStory = <HotelCardsList {...mockList} />;

storiesOf('Component/HotelList', module).add('Default', () => HotelCardsListStory);
