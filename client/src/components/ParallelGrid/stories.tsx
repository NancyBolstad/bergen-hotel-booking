import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ParallelGrid from './ParallelGrid';
import { HotelDetails } from '../../types/response';
import { mockSlides } from '../Slider/story';

const mockHotelA: HotelDetails = {
  id: 'M5piLP6gm3z5ririq3v',
  name: 'Lorem ipsum Hotel A',
  featuredImages: mockSlides,
  descriptions:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  price: 1089,
  category: 'hotel',
  location: 'bergen street',
};

const mockHotelB: HotelDetails = {
  id: 'M5piLP6gm3z5ririq3v',
  name: 'Lorem ipsum Hotel B',
  featuredImages: mockSlides,
  descriptions:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  price: 1089,
  category: 'hotel',
  location: 'bergen street',
};

export const ParallelGridStory = (
  <ParallelGrid list={[mockHotelA, mockHotelB, mockHotelA, mockHotelB, mockHotelA, mockHotelB]} />
);

storiesOf('Component/ParallelGrid', module).add('Default', () => ParallelGridStory);
