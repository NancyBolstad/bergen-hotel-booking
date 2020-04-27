import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InfoList from './';

const checkBoxMockA = {
  title: 'Lorem ipsum dolor',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const checkBoxMockB = {
  title: 'Pellentesque ac sapien',
  content:
    'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.',
};

export const mockCheckboxList = {
  sectionTitle: 'Molestie Pellentesque',
  list: [checkBoxMockA, checkBoxMockB, checkBoxMockB, checkBoxMockA],
};

storiesOf('Component/InfoList', module).add('Default', () => <InfoList {...mockCheckboxList} />);
