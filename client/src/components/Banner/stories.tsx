import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchBanner, PlainBanner, FlexBanner } from '.';

const mockTitleLong: string = 'Lorem ipsum dolor sit amet';
const mockTitleShort: string = 'Accommodations';
const mockDescription: string =
  'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique.';

const image = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
};

export const SearchBannerStory = <SearchBanner figure={image} title={mockTitleLong} />;
export const PlainBannerWithBackgroundImageStory = (
  <PlainBanner title={mockTitleShort} backgroundColor="surface" backgroundImage={image} />
);
export const PlainBannerVariantAStory = <PlainBanner title={mockTitleShort} isTitleColorRed />;
export const PlainBannerVariantBStory = (
  <PlainBanner title={mockTitleShort} backgroundColor="surface" />
);
export const FlexBannerLeftStory = (
  <FlexBanner
    title={mockTitleShort}
    descriptions={mockDescription}
    figure={image}
    backgroundColor="secondary"
    buttonText="Read More"
    redirectLink="/foo"
  />
);
export const FlexBannerRightStory = (
  <FlexBanner
    title={mockTitleShort}
    subTitle={mockTitleLong}
    figure={image}
    backgroundColor="secondary"
    isImageRight
  />
);

storiesOf('Component/Banner', module)
  .add('SearchBanner', () => SearchBannerStory)
  .add('PlainBanner with background image', () => PlainBannerWithBackgroundImageStory)
  .add('PlainBanner Variant A', () => PlainBannerVariantAStory)
  .add('PlainBanner Variant B', () => PlainBannerVariantBStory)
  .add('FlexBanner with Image Left', () => FlexBannerLeftStory)
  .add('FlexBanner with Image Right', () => FlexBannerRightStory);
