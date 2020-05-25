import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { HotelDetails, HotelCategories, HotelServices } from '../types/response';
import { MockCategories, MockServices } from './../data/data';

export interface FilterInterface {
  category: string;
  service: string;
  name: string;
}

function useFilter(data: HotelDetails[], userInput: FilterInterface, autoUpdateUrl?: boolean) {
  const history = useHistory();
  const [filter, setFilter] = React.useState<FilterInterface>(userInput);
  const [hotels, setHotels] = React.useState(data);
  const results: HotelDetails[] = data;
  const [letters, setLetters] = React.useState([] as string[]);
  const [message, setMessage] = React.useState<string>('');

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

    setHotels(
      results.filter(e => {
        let match = true;

        console.log(77777777);

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
    history.push(
      `/search?accommodationName=${filter.name}&category=${filter.category}&service=${filter.service}`,
    );
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
  };
}

export default useFilter;
