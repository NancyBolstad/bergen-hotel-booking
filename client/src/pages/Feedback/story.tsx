import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Home from './Feedback';

storiesOf('Page/Success', module).add('Default', () => <Home bookingSuccess />);
