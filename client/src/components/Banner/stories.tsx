import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { createList } from '../../util/mockHelpers';
import SearchBanner from './SearchBanner';
import PlainBanner from './PlainBanner';
import FlexBanner from './FlexBanner';
import BannerGrid from './BannerGrid';

const mockTitleLong: string = 'Lorem ipsum dolor sit amet';
const mockTitleShort: string = 'Accommodations';
const mockDescription: string =
  'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique.';

const image = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
};

const mockBannerGrid = {
  backgroundImage: image,
  text: mockTitleShort,
  redirectLink: '/accommodations',
};

export const SearchBannerStory = (
  <SearchBanner figure={image} title={mockTitleLong} placeHolderText="Search for hotels" />
);
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
    backgroundColor="secondaryVariant"
    buttonText="Read More"
    redirectLink="/foo"
  />
);
export const FlexBannerRightStory = (
  <FlexBanner
    title={mockTitleShort}
    subTitle={mockTitleLong}
    figure={image}
    backgroundColor="secondaryVariant"
    isImageRight
  />
);

export const BannerGridStory = <BannerGrid banners={createList(mockBannerGrid, 4)} />;

storiesOf('Component/Banner', module)
  .add('SearchBanner', () => SearchBannerStory)
  .add('PlainBanner with background image', () => PlainBannerWithBackgroundImageStory)
  .add('PlainBanner Variant A', () => PlainBannerVariantAStory)
  .add('PlainBanner Variant B', () => PlainBannerVariantBStory)
  .add('FlexBanner with Image Left', () => FlexBannerLeftStory)
  .add('FlexBanner with Image Right', () => FlexBannerRightStory)
  .add('BannerGrid', () => BannerGridStory);
