import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InfoList from '../../components/InfoList';
import { mockCheckboxList } from '../../components/InfoList/story';

storiesOf('Page/Details', module).add('Default', () => <InfoList {...mockCheckboxList} />);
