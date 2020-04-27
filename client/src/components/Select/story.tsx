import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Select from '.';

const Wrapper = styled.div`
  padding: 1rem;
  display: inlin-flex;
`;

const mockOptions = [
  {
    value: 'alphabetically',
    label: 'Alphabetically',
  },
  {
    value: 'popularity',
    label: 'Popularity',
  },
];

storiesOf('Component/Select', module).add('Default', () => (
  <Wrapper>
    <Select label="Sort by" required={true} options={mockOptions}></Select>
  </Wrapper>
));
