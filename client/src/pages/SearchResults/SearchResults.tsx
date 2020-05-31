import React from 'react';
import PlainBanner from '../../components/Banner/PlainBanner';
import SearchHotel from '../../components/SearchHotel/SearchHotel';

const SearchResults: React.FunctionComponent = () => {
  return (
    <>
      <PlainBanner title="Search, find and book accommodations in Bergen" isTitleColorRed />
      <SearchHotel alphabeticalSort />
    </>
  );
};

export default SearchResults;
