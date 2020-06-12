import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BookForm from './BookForm';

storiesOf('Component/BookForm', module).add('Default', () => <BookForm establishmentId="foo123" />);
