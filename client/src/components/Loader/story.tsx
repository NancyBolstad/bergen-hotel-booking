import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './Loader';
import Header from '../Header/Header';

storiesOf('Component/Loader', module).add('Basic usage', () => (
  <>
    <Header />
    <Loader />
  </>
));
