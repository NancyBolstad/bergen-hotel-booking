import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '.';

const image = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const ImageFixedStorySmall = <Image image={image} size="small" />;
export const ImageFixedStoryMedium = <Image image={image} size="medium" />;
export const ImageFixedStoryLarge = <Image image={image} size="large" />;
export const ImageFixedStoryFluid = <Image image={image} size="fluid" />;

storiesOf('Component/Image', module)
  .add('Fixed size small', () => ImageFixedStorySmall)
  .add('Fixed size medium', () => ImageFixedStoryMedium)
  .add('Fixed size large', () => ImageFixedStoryLarge)
  .add('Fixed size fluid', () => ImageFixedStoryFluid);
