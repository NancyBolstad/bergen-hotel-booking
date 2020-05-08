import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchBanner, PlainBanner } from '.';

const mockTitleLong = 'Lorem ipsum dolor sit amet';
const mockTitleShort = 'Accommodations';

const image = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
};

export const SearchBannerStory = <SearchBanner figure={image} title={mockTitleLong} />;
export const PlainBannerStory = (
  <PlainBanner title={mockTitleShort} backgroundColor="surface" isTitleColorRed />
);
export const PlainBannerVariantStory = <PlainBanner title={mockTitleShort} />;

storiesOf('Component/Banner', module)
  .add('SearchBanner', () => SearchBannerStory)
  .add('PlainBanner', () => PlainBannerStory)
  .add('PlainBanner Variant', () => PlainBannerVariantStory);
