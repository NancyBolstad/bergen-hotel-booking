import * as React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useQueryParams, StringParam } from 'use-query-params';
import { HotelDetails, HotelCategories, HotelServices } from '../types/response';
import { MockCategories, MockServices } from './../data/data';
import { Context } from '../context/GlobalContext';

export interface FilterInterface {
  category: string;
  service: string;
  name: string;
}

function useFilter(data: HotelDetails[], userInput: FilterInterface, autoUpdateUrl?: boolean) {
  const history = useHistory();
  const [hotels, setHotels] = React.useState(data);
  const [currentQueryString, setCurrentQueryString] = useQueryParams({
    name: StringParam,
    category: StringParam,
    service: StringParam,
  });
  const [filter, setFilter] = React.useState<FilterInterface>(userInput);
  const results: HotelDetails[] = data;
  const [letters, setLetters] = React.useState([] as string[]);

  console.log({
    hotels: hotels,
    results: results,
  });

  function extractLetters(hotels: HotelDetails[]) {
    const letters: string[] = [];

    for (let i = 0; i < hotels.length; i++) {
      const hotel = hotels[i];

      if (hotel.name) {
        const letter = hotel.name.charAt(0).toUpperCase();

        if (!letters.includes(letter)) {
          letters.push(letter);
        }
      }
    }

    setLetters(letters.sort());
  }

  function handleFilter(type: 'category' | 'service' | 'name', value: string) {
    filter[type] = value;
    console.log(filter[type]);

    setHotels(
      results.filter(e => {
        let match = true;

        console.log(222222222);

        if (filter.category.length > 0) {
          match = !!e.category && e.category === filter.category;
        }

        if (match && filter.service.length > 0) {
          match = !!e.services && e.services.includes(filter.service);
        }

        if (match && filter.name.length > 0) {
          match = !!e.name && e.name.toLowerCase().includes(filter.name.toLowerCase());
        }

        console.log(value);

        return match;
      }),
    );

    setFilter(filter);

    if (autoUpdateUrl) {
      updateUrl(filter);
    }
  }

  function updateUrl(filter: FilterInterface): void {
    setCurrentQueryString({
      name: filter.name,
      category: filter.category,
      service: filter.service,
    });
  }

  React.useEffect(() => {
    extractLetters(hotels);
  }, [hotels]);

  React.useEffect(() => {
    if (results && currentQueryString.name) {
      handleFilter('name', currentQueryString.name);
    }

    if (results && currentQueryString.category) {
      handleFilter('category', currentQueryString.category);
    }
    if (results && currentQueryString.service) {
      handleFilter('service', currentQueryString.service);
    }
  }, [currentQueryString, results]);

  return {
    hotels,
    results,
    letters,
    filter,
    handleFilter,
    updateUrl,
    currentQueryString,
  };
}

export default useFilter;
