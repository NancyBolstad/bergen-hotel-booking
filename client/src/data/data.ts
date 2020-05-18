import { HotelDetails, HotelCategories, HotelServices } from '../types/response';

export const MockCategories: HotelCategories[] = [
  'hotel',
  'bed and breakfast',
  'hostels',
  'tourist residence',
  'furnished apartment',
];

export const MockServices: HotelServices[] = [
  'free breakfast',
  'fitness centre',
  'private bathroom',
  'free wifi',
  'room service',
  'accessible room',
];

export const MockHotels: HotelDetails[] = [
  {
    id: '-M6tXvC9kor7EEpzDV-4',
    category: 'furnished apartment',
    descriptions:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['fantastic cleanness', 'helpful staff', 'wonderful location'],
    location: '19 Grayhawk Trail',
    name: 'at turpis donec posuere metus',
    onSale: true,
    price: 1635,
    rating: 7.3,
    salePrice: 889,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvC9kor7EEpzDV-6',
    category: 'furnished apartment',
    descriptions:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['fantastic cleanness', 'helpful staff', 'wonderful location'],
    location: '19 Grayhawk Trail',
    name: 'at turpis donec posuere metus',
    onSale: true,
    price: 1635,
    rating: 7.3,
    salePrice: 889,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCAiEpxhShc39i2',
    category: 'hotel',
    descriptions:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['fantastic cleanness', 'very comfortable bed', 'wonderful location'],
    location: '54 Sutteridge Hill',
    name: 'posuere cubilia curae duis',
    onSale: false,
    price: 2404,
    rating: 9.5,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCAiEpxhShc39ik',
    category: 'hotel',
    descriptions:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['fantastic cleanness', 'very comfortable bed', 'wonderful location'],
    location: '54 Sutteridge Hill',
    name: 'posuere cubilia curae duis',
    onSale: false,
    price: 2404,
    rating: 9.5,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCB15s2fn5HNu8d',
    category: 'tourist residence',
    descriptions:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '136 Riverside Pass',
    name: 'nulla ut erat',
    onSale: true,
    price: 1238,
    rating: 7.8,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCB15s2fn5HNu8f',
    category: 'tourist residence',
    descriptions:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '136 Riverside Pass',
    name: 'nulla ut erat',
    onSale: true,
    price: 1238,
    rating: 7.8,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCCC5v-gSAAmUIc',
    category: 'bed and breakfast',
    descriptions:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1488562914596-f2d4280bc098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1566681859077-921b01e5aa49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1468912637438-582f3f543cba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '15 Everett Avenue',
    name: 'eu magna vulputate',
    onSale: false,
    price: 692,
    rating: 8.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCCC5v-gSAAmUIg',
    category: 'bed and breakfast',
    descriptions:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1488562914596-f2d4280bc098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1566681859077-921b01e5aa49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1468912637438-582f3f543cba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '15 Everett Avenue',
    name: 'eu magna vulputate',
    onSale: false,
    price: 692,
    rating: 8.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCDX47sbVG99wol',
    category: 'hostels',
    descriptions:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1488562914596-f2d4280bc098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1566681859077-921b01e5aa49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1468912637438-582f3f543cba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '0 Acker Place',
    name: 'sapien sapien iaculis',
    onSale: false,
    price: 1025,
    rating: 7.5,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCDX47sbVG99wor',
    category: 'hostels',
    descriptions:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1488562914596-f2d4280bc098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1566681859077-921b01e5aa49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1468912637438-582f3f543cba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '0 Acker Place',
    name: 'sapien sapien iaculis',
    onSale: false,
    price: 1025,
    rating: 7.5,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCE8vxUMIV-IlP1',
    category: 'hotel',
    descriptions:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '3253 Glacier Hill Park',
    name: 'dapibus duis',
    onSale: false,
    price: 2761,
    rating: 8.8,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCE8vxUMIV-IlP8',
    category: 'hotel',
    descriptions:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '3253 Glacier Hill Park',
    name: 'dapibus duis',
    onSale: false,
    price: 2761,
    rating: 8.8,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCGZrwM_4pt1lA5',
    category: 'tourist residence',
    descriptions:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '0 Linden Center',
    name: 'praesent id massa',
    onSale: false,
    price: 1470,
    rating: 9,
    services: ['free wifi', 'free breakfast'],
  },
  {
    id: '-M6tXvCGZrwM_4pt1lAE',
    category: 'tourist residence',
    descriptions:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '0 Linden Center',
    name: 'praesent id massa',
    onSale: false,
    price: 1470,
    rating: 9,
    services: ['free wifi', 'free breakfast'],
  },
  {
    id: '-M6tXvCHIGibRmMgtn-2',
    category: 'bed and breakfast',
    descriptions:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'family friendly'],
    location: '4 Blue Bill Park Lane',
    name: 'malesuada in imperdiet',
    onSale: true,
    price: 935,
    rating: 7.5,
    salePrice: 755,
    services: ['free wifi', 'accessible room'],
  },
  {
    id: '-M6tXvCHIGibRmMgtn-G',
    category: 'bed and breakfast',
    descriptions:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'family friendly'],
    location: '4 Blue Bill Park Lane',
    name: 'malesuada in imperdiet',
    onSale: true,
    price: 935,
    rating: 7.5,
    salePrice: 755,
    services: ['free wifi', 'accessible room'],
  },
  {
    id: '-M6tXvCI5ZNWpTS8tUPF',
    category: 'hotel',
    descriptions:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '8320 Barby Pass',
    name: 'luctus ultricies',
    onSale: true,
    price: 2729,
    rating: 8.5,
    salePrice: 1755,
    services: ['free wifi', 'accessible room'],
  },
  {
    id: '-M6tXvCI5ZNWpTS8tUPJ',
    category: 'hotel',
    descriptions:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '8320 Barby Pass',
    name: 'luctus ultricies',
    onSale: true,
    price: 2729,
    rating: 8.5,
    salePrice: 1755,
    services: ['free wifi', 'accessible room'],
  },
  {
    id: '-M6tXvCI5ZNWpTS8tUPQ',
    category: 'hotel',
    descriptions:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '8320 Barby Pass',
    name: 'luctus ultricies',
    onSale: true,
    price: 2729,
    rating: 8.5,
    salePrice: 1755,
    services: ['free wifi', 'accessible room'],
  },
  {
    id: '-M6tXvCJMqzone8C98EA',
    category: 'furnished apartment',
    descriptions:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '03 Leroy Place',
    name: 'habitasse platea',
    onSale: true,
    price: 1446,
    rating: 8.2,
    salePrice: 955,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCJMqzone8C98EP',
    category: 'furnished apartment',
    descriptions:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '03 Leroy Place',
    name: 'habitasse platea',
    onSale: true,
    price: 1446,
    rating: 8.2,
    salePrice: 955,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCJMqzone8C98EQ',
    category: 'furnished apartment',
    descriptions:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '03 Leroy Place',
    name: 'habitasse platea',
    onSale: true,
    price: 1446,
    rating: 8.2,
    salePrice: 955,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCKfn3EEdeu3fyI',
    category: 'hotel',
    descriptions:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '17048 Lien Circle',
    name: 'nunc nisl duis bibendum felis',
    onSale: false,
    price: 909,
    rating: 8.6,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCKfn3EEdeu3fyQ',
    category: 'hotel',
    descriptions:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '17048 Lien Circle',
    name: 'nunc nisl duis bibendum felis',
    onSale: false,
    price: 909,
    rating: 8.6,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCKfn3EEdeu3fyZ',
    category: 'hotel',
    descriptions:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1565112791128-f7f4c2d487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '17048 Lien Circle',
    name: 'nunc nisl duis bibendum felis',
    onSale: false,
    price: 909,
    rating: 8.6,
    services: ['free wifi', 'room services', 'free breakfast'],
  },
  {
    id: '-M6tXvCL0CtiF2Z10ch3',
    category: 'furnished apartment',
    descriptions:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '89857 Judy Lane',
    name: 'neque libero convallis',
    onSale: true,
    price: 1556,
    rating: 8.4,
    salePrice: 955,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCL0CtiF2Z10ch6',
    category: 'furnished apartment',
    descriptions:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '89857 Judy Lane',
    name: 'neque libero convallis',
    onSale: true,
    price: 1556,
    rating: 8.4,
    salePrice: 955,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCL0CtiF2Z10chQ',
    category: 'furnished apartment',
    descriptions:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
    ],
    features: ['wonderful location', 'fantastic cleanness'],
    location: '89857 Judy Lane',
    name: 'neque libero convallis',
    onSale: true,
    price: 1556,
    rating: 8.4,
    salePrice: 955,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCMBnOIGqJuV6Y2',
    category: 'bed and breakfast',
    descriptions:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '660 Arkansas Alley',
    name: 'in hac habitasse platea dictumst',
    onSale: false,
    price: 979,
    rating: 7.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCMBnOIGqJuV6YO',
    category: 'bed and breakfast',
    descriptions:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '660 Arkansas Alley',
    name: 'in hac habitasse platea dictumst',
    onSale: false,
    price: 979,
    rating: 7.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCMBnOIGqJuV6YQ',
    category: 'bed and breakfast',
    descriptions:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '660 Arkansas Alley',
    name: 'in hac habitasse platea dictumst',
    onSale: false,
    price: 979,
    rating: 7.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCNcbt5-ljnL54D',
    category: 'furnished apartment',
    descriptions:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['fantastic cleanness', 'helpful staff', 'wonderful location'],
    location: '19 Grayhawk Trail',
    name: 'posuere metus',
    onSale: true,
    price: 1635,
    rating: 8.3,
    salePrice: 889,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCNcbt5-ljnL54Q',
    category: 'furnished apartment',
    descriptions:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['fantastic cleanness', 'helpful staff', 'wonderful location'],
    location: '19 Grayhawk Trail',
    name: 'posuere metus',
    onSale: true,
    price: 1635,
    rating: 8.3,
    salePrice: 889,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCNcbt5-ljnL54_',
    category: 'furnished apartment',
    descriptions:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['fantastic cleanness', 'helpful staff', 'wonderful location'],
    location: '19 Grayhawk Trail',
    name: 'posuere metus',
    onSale: true,
    price: 1635,
    rating: 8.3,
    salePrice: 889,
    services: ['free wifi', 'accessible room', 'private bathroom'],
  },
  {
    id: '-M6tXvCOM18G2YQB4ad3',
    category: 'bed and breakfast',
    descriptions:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '68175 Manufacturers Court',
    name: 'nisl nunc nonummy',
    onSale: false,
    price: 990,
    rating: 7.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCOM18G2YQB4adO',
    category: 'bed and breakfast',
    descriptions:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '68175 Manufacturers Court',
    name: 'nisl nunc nonummy',
    onSale: false,
    price: 990,
    rating: 7.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCOM18G2YQB4adQ',
    category: 'bed and breakfast',
    descriptions:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '68175 Manufacturers Court',
    name: 'nisl nunc nonummy',
    onSale: false,
    price: 990,
    rating: 7.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCP6sSv8gSCjQJ2',
    category: 'hotel',
    descriptions:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
    ],
    features: ['fantastic cleanness', 'very comfortable bed', 'wonderful location'],
    location: '65 Lawn Terrace',
    name: 'faucibus luctus',
    onSale: false,
    price: 1745,
    rating: 9.5,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCP6sSv8gSCjQJE',
    category: 'hotel',
    descriptions:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
    ],
    features: ['fantastic cleanness', 'very comfortable bed', 'wonderful location'],
    location: '65 Lawn Terrace',
    name: 'faucibus luctus',
    onSale: false,
    price: 1745,
    rating: 9.5,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCP6sSv8gSCjQJQ',
    category: 'hotel',
    descriptions:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1581955427155-890ed868b03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1564869063369-e7c0c72dbe1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
      },
    ],
    features: ['fantastic cleanness', 'very comfortable bed', 'wonderful location'],
    location: '65 Lawn Terrace',
    name: 'faucibus luctus',
    onSale: false,
    price: 1745,
    rating: 9.5,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCQHwR6IYsjSVm3',
    category: 'hotel',
    descriptions:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '5954 Anthes Crossing',
    name: 'convallis nunc',
    onSale: false,
    price: 2659,
    rating: 8.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCQHwR6IYsjSVmG',
    category: 'hotel',
    descriptions:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '5954 Anthes Crossing',
    name: 'convallis nunc',
    onSale: false,
    price: 2659,
    rating: 8.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCQHwR6IYsjSVmQ',
    category: 'hotel',
    descriptions:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff', 'family friendly'],
    location: '5954 Anthes Crossing',
    name: 'convallis nunc',
    onSale: false,
    price: 2659,
    rating: 8.3,
    services: ['free wifi', 'accessible room', 'fitness centre'],
  },
  {
    id: '-M6tXvCR4cWu2NO7U4u2',
    category: 'tourist residence',
    descriptions:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '1 Stephen Lane',
    name: 'quis lectus suspendisse potenti',
    onSale: true,
    price: 1838,
    rating: 7.3,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCR4cWu2NO7U4uQ',
    category: 'tourist residence',
    descriptions:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '1 Stephen Lane',
    name: 'quis lectus suspendisse potenti',
    onSale: true,
    price: 1838,
    rating: 7.3,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCR4cWu2NO7U4ul',
    category: 'tourist residence',
    descriptions:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '1 Stephen Lane',
    name: 'quis lectus suspendisse potenti',
    onSale: true,
    price: 1838,
    rating: 7.3,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCSstmDGpLR6bQ',
    category: 'hotel',
    descriptions:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1505773436287-362fdb3df97f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/flagged/photo-1574342961579-cd8411b26ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1259&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '44362 West Terrace',
    name: 'fringilla rhoncus',
    onSale: true,
    price: 1663,
    rating: 8.1,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCSstmDGpLR6bZ',
    category: 'hotel',
    descriptions:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1505773436287-362fdb3df97f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/flagged/photo-1574342961579-cd8411b26ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1259&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '44362 West Terrace',
    name: 'fringilla rhoncus',
    onSale: true,
    price: 1663,
    rating: 8.1,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCSstmDGpLR6bZ8',
    category: 'hotel',
    descriptions:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1505773436287-362fdb3df97f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/flagged/photo-1574342961579-cd8411b26ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1259&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '44362 West Terrace',
    name: 'fringilla rhoncus',
    onSale: true,
    price: 1663,
    rating: 8.1,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCTgnAUPRuYvUGF',
    category: 'tourist residence',
    descriptions:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '0 Novick Way',
    name: 'bibendum morbi',
    onSale: true,
    price: 2074,
    rating: 7.3,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCTgnAUPRuYvUGP',
    category: 'tourist residence',
    descriptions:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '0 Novick Way',
    name: 'bibendum morbi',
    onSale: true,
    price: 2074,
    rating: 7.3,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
  {
    id: '-M6tXvCTgnAUPRuYvUGQ',
    category: 'tourist residence',
    descriptions:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    featuredImages: [
      {
        alt: 'at turpis donec posuere metus 1',
        url:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 2',
        url:
          'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 3',
        url:
          'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        alt: 'at turpis donec posuere metus 4',
        url:
          'https://images.unsplash.com/photo-1505821023565-fd3311fb84e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80',
      },
    ],
    features: ['wonderful location', 'helpful staff'],
    location: '0 Novick Way',
    name: 'bibendum morbi',
    onSale: true,
    price: 2074,
    rating: 7.3,
    salePrice: 989,
    services: ['free wifi', 'accessible room', 'private bathroom', 'fitness centre'],
  },
];
