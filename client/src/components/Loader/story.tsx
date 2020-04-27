import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '.';
import Header from '../Header';

storiesOf('Component/Loader', module).add('Basic usage', () => (
  <>
    <Header />
    <Loader />
  </>
));
