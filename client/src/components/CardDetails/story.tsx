import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardDetails, { Props } from '.';

const mockGenre = {
  id: 40891,
  name: 'action',
  slug: 'action',
  games_count: 100,
  image_background: 'foo.no',
};

const mockPlatform = {
  platform: {
    id: 998,
    name: 'Platform A',
    slug: 'platform-a',
    image: 'foo.no',
    year_end: '2020',
    year_start: '2012',
    games_count: 10,
    image_background: 'foo.no',
  },
  released_at: '2012-09-17',
};

const mockCard: Props = {
  title: 'Grand Theft Auto V',
  image: 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg',
  description:
    'Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:',
  websiteLink: 'https://store.playstation.com/en-us/product/UP1004-CUSA00419_00-GTAVDIGITALDOWNL',
  genres: [mockGenre, mockGenre, mockGenre],
  platforms: [mockPlatform, mockPlatform, mockPlatform],
};

storiesOf('Component/CardDetail', module).add('Default', () => <CardDetails {...mockCard} />);
