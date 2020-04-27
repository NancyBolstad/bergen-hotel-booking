import * as React from 'react';
import { storiesOf } from '@storybook/react';
import HomeContent from '.';
import Typography from '../Typography';

const mockHeadingA = (
  <Typography element="h1" variant="h1" content="Neque porro quisquam dolorem" isPrimaryColor />
);
const mockHeadingB = (
  <Typography element="h2" variant="h2" content="Neque porro quisquam dolorem" />
);

export const mockChildren = [mockHeadingA, mockHeadingB, mockHeadingA, mockHeadingB];

storiesOf('Component/HomeContent', module).add('Default', () => (
  <HomeContent children={mockChildren} />
));
