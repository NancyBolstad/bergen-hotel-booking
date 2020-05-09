import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './';
import { Root, HotelDetails } from '../../types/response';

let list: HotelDetails[];

async function getAllCards() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}establishments`);
    const results: Root = await response.json();
    list = results.data;

    return list;
  } catch (err) {
    throw err;
  }
}

getAllCards();

storiesOf('Component/CardsList', module).add('Default', () => <CardsList cards={list} />);
