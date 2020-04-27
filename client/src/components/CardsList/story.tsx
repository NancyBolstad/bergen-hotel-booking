import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './';
import { Root, Result } from '../../types/data';
import { API_BASE_URL } from '../../util/constants';

let list: Result[];

async function getAllCards() {
  try {
    const response = await fetch(API_BASE_URL);
    const data: Root = await response.json();
    list = data.results;

    return data;
  } catch (err) {
    throw err;
  }
}

getAllCards();

storiesOf('Component/CardsList', module).add('Default', () => <CardsList cards={list} />);
