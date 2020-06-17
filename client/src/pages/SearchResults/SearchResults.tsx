import React from 'react';
import { Helmet } from 'react-helmet';
import PlainBanner from '../../components/Banner/PlainBanner';
import SearchHotel from '../../components/SearchHotel/SearchHotel';

const SearchResults: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>Accommodations</title>
      </Helmet>
      <PlainBanner title="Search, find and book accommodations in Bergen" isTitleColorRed />
      <SearchHotel />
    </>
  );
};

export default SearchResults;
