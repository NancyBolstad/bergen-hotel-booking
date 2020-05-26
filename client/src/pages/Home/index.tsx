import React from 'react';
import { Context } from '../../context/GlobalContext';
import { SearchBanner } from '../../components/Banner';
import IconList from '../../components/IconList/IconList';
import { BannerGrid, FlexBanner } from '../../components/Banner/';
import { HotelCardsList } from '../../components/HotelCards';
import Loader from '../../components/Loader/Loader';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);

  const image = {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589114470/holidaza/photo-1580946443359-1126222f9224_fjvl7g.jpg',
    alt: 'Bergen scenery',
  };

  const mockBannerGrid = {
    backgroundImage: image,
    text: 'Up to 50% off',
    redirectLink: `/search?name=&category=&service=free%20breakfast`,
  };

  const mockFlexBannerBlog = {
    title: 'Stories from Bergen',
    descriptions:
      'Stay updated with the latest travel stories, tips and insights shared by our community.',
    figure: image,
    buttonText: 'Read our blog',
    redirectLink: '/blog',
  };

  const mockFlexBannerAboutUs = {
    title: 'About Us',
    descriptions:
      'Holidaze Berge is a boutique design and software development company. We have 50+ JS and design experts on board and 6+ years of experience in building digital projects from scratch or refreshing existing ones.',
    figure: image,
    buttonText: 'Learn more',
    redirectLink: '/about',
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
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="Most popular hotels"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 6)}
        />
      )}
      <FlexBanner {...mockFlexBannerBlog} backgroundColor="secondaryVariant" />
      <FlexBanner {...mockFlexBannerAboutUs} isImageRight />
    </main>
  );
};

export default Home;
