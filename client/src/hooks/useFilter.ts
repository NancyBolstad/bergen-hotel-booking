import * as React from 'react';
import { useQueryParams, StringParam } from 'use-query-params';
import queryString from 'query-string';
import { HotelDetails } from '../types/response';
import { Context } from '../context/GlobalContext';

export interface FilterInterface {
  category: string;
  service: string;
  name: string;
}

export interface FilterProps {
  autoUpdateUrl?: boolean;
}

function useFilter({ autoUpdateUrl }: FilterProps) {
  const localContext = React.useContext(Context);
  const values = queryString.parse(window.location.search);
  const [hotels, setHotels] = React.useState<HotelDetails[]>([]);
  const [currentQueryString, setCurrentQueryString] = useQueryParams({
    name: StringParam,
    category: StringParam,
    service: StringParam,
  });
  const [filter, setFilter] = React.useState<FilterInterface>({
    category: typeof values.category === 'string' ? values.category : '',
    service: typeof values.service === 'string' ? values.service : '',
    name: typeof values.name === 'string' ? values.name : '',
  });
  const results: HotelDetails[] = localContext.default;
  const [letters, setLetters] = React.useState([] as string[]);

  console.log({
    hotels: hotels,
    results: results,
  });

  console.log({
    filter: filter,
    currentQueryString: currentQueryString,
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

        if (filter.category.length > 0) {
          match = !!e.category && e.category === filter.category;
        }

        if (match && filter.service.length > 0) {
          match = !!e.services && e.services.includes(filter.service);
        }

        if (match && filter.name.length > 0) {
          match = !!e.name && e.name.toLowerCase().includes(filter.name.toLowerCase());
        }

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
    setHotels(results);
  }, [results]);

  React.useEffect(() => {
    console.log(10101010101010);
    if (results && filter.name) {
      handleFilter('name', filter.name);
    }

    if (results && filter.category) {
      handleFilter('category', filter.category);
    }
    if (results && filter.service) {
      handleFilter('service', filter.service);
    }
  }, [filter, results]);

  React.useEffect(() => {
    console.log(199999999);
    if (results && currentQueryString.name) {
      handleFilter('name', filter.name);
    }

    if (results && currentQueryString.category) {
      handleFilter('category', filter.category);
    }
    if (results && currentQueryString.service) {
      handleFilter('service', filter.service);
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
