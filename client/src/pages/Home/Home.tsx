import React from 'react';
import FlexBanner from '../../components/Banner/FlexBanner';
import SearchBanner from '../../components/Banner/SearchBanner';
import BannerGrid from '../../components/Banner/BannerGrid';
import { HotelCardsList } from '../../components/HotelCards';
import IconList from '../../components/IconList/IconList';
import Loader from '../../components/Loader/Loader';
import { Context } from '../../context/GlobalContext';
import {
  CAMPAIGN_A,
  FLEX_BANNER_A,
  FLEX_BANNER_B,
  PAGE_HERO_IMG,
  CAMPAIGN_B,
  CAMPAIGN_C,
} from '../../util/constants';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);

  return (
    <>
      <SearchBanner figure={PAGE_HERO_IMG} title="Book accommodations in Bergen at best price" />
      <IconList />
      <BannerGrid
        sectionTitle="We select the best deals for you."
        banners={[CAMPAIGN_A, CAMPAIGN_B, CAMPAIGN_C]}
      />
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="Most popular accommodations"
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
