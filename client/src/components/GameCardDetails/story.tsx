import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardDetails from '.';
import { HotelDetails } from '../../types/response';

const mockCard: HotelDetails = {
  id: '-M6tXvC9kor7EEpzDV-6',
  name: 'at turpis donec posuere metus',
  descriptions:
    'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
  location: '19 Grayhawk Trail',
  price: 1635,
  category: 'furnished apartment',
  onSale: true,
  salePrice: 889,
  rating: 7.3,
  features: ['fantastic cleanness', 'helpful staff', 'wonderful location'],
  services: ['free wifi', 'accessible room', 'private bathroom'],
  featuredImages: [
    {
      url:
        'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      alt: 'at turpis donec posuere metus 1',
    },
    {
      url:
        'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      alt: 'at turpis donec posuere metus 2',
    },
    {
      url:
        'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      alt: 'at turpis donec posuere metus 3',
    },
    {
      url:
        'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      alt: 'at turpis donec posuere metus 4',
    },
  ],
};

storiesOf('Component/CardDetail', module).add('Default', () => <CardDetails {...mockCard} />);
