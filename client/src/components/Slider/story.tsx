import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './Slider';

export const image1 = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const image2 = {
  url:
    'https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const image3 = {
  url:
    'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const mockSlides = [image1, image2, image3];

storiesOf('Component/Slider', module)
  .add('Default', () => <Slider slides={mockSlides} />)
  .add('Large slider', () => <Slider slides={mockSlides} large />);
