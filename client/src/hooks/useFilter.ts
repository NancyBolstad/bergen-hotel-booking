import * as React from 'react';
import { useQueryParams, StringParam } from 'use-query-params';
import { HotelDetails } from '../types/response';
import { Context } from '../context/GlobalContext';

export interface FilterInterface {
  category: string;
  service: string;
  name: string;
}

export interface FilterProps {
  currentFilter?: FilterInterface;
  autoUpdateUrl?: boolean;
}

const defaultFilter: FilterInterface = { category: '', service: '', name: '' };

function useFilter({ currentFilter, autoUpdateUrl }: FilterProps) {
  const localContext = React.useContext(Context);
  const [hotels, setHotels] = React.useState<HotelDetails[]>([]);
  const [currentQueryString, setCurrentQueryString] = useQueryParams({
    name: StringParam,
    category: StringParam,
    service: StringParam,
  });
  const [filter, setFilter] = React.useState<FilterInterface>(
    currentFilter ? currentFilter : defaultFilter,
  );
  const results: HotelDetails[] = localContext.default;
  const [letters, setLetters] = React.useState([] as string[]);

  console.log({
    hotels: hotels,
    results: results,
  });

  React.useEffect(() => {
    console.log(55555555);
    setHotels(results);
  }, [results]);

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
