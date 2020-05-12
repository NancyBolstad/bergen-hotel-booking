import React from 'react';
import { Context } from '../../context/GlobalContext';
import { SearchBanner } from '../../components/Banner';
import IconList from '../../components/IconList';
import { BannerGrid } from '../../components/Banner/';
import { HotelCardsList } from '../../components/HotelCards';
import Loader from '../../components/Loader';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [loading, setLoading] = React.useState<boolean>(localContext.loading);

  const image = {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589114470/holidaza/photo-1580946443359-1126222f9224_fjvl7g.jpg',
    alt: 'Bergen scenery',
  };

  const mockBannerGrid = {
    backgroundImage: image,
    text: 'Up to 50% off',
    redirectLink: '/accommodations',
  };

  return (
    <main>
      <SearchBanner
        figure={image}
        title="Book your holiday in Bergen at best price"
        placeHolderText="Search for hotels"
      />
      <IconList />
      <BannerGrid
        sectionTitle="We selected best deals for you."
        banners={[mockBannerGrid, mockBannerGrid, mockBannerGrid]}
      />
      {loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="Most popular hotels"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 6)}
        />
      )}
    </main>
  );
};

export default Home;
