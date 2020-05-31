import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PageHero from './PageHero';
import { BlogListStory } from '../Blog/stories';

export const image = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

storiesOf('Component/PageHero', module)
  .add('Default', () => <PageHero children={BlogListStory} figure={image} />)
  .add('Without background image', () => (
    <PageHero children={BlogListStory} backgroundColor="primary" />
  ));
