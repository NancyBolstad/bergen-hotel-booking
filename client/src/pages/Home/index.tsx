import React from 'react';
import { Context } from '../../context/GlobalContext';
import { SearchBanner } from '../../components/Banner';
import IconList from '../../components/IconList/IconList';
import { BannerGrid, FlexBanner } from '../../components/Banner/';
import { HotelCardsList } from '../../components/HotelCards';
import Loader from '../../components/Loader/Loader';
import { PAGE_HERO_IMG, FLEX_BANNER_A, FLEX_BANNER_B, CAMPAIGN_A } from '../../data/content';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);

  return (
    <>
      <SearchBanner
        figure={PAGE_HERO_IMG}
        title="Book your holiday in Bergen at best price"
        placeHolderText="Search for hotels"
      />
      <IconList />
      <BannerGrid
        sectionTitle="We selected best deals for you."
        banners={[CAMPAIGN_A, CAMPAIGN_A, CAMPAIGN_A]}
      />
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="Most popular hotels"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 8)}
        />
      )}
      <FlexBanner {...FLEX_BANNER_A} />
      <FlexBanner {...FLEX_BANNER_B} isImageRight />
    </>
  );
};

export default Home;
