import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { HotelDetails, HotelCategories, HotelServices } from '../types/response';
import { MockCategories, MockServices } from './../data/data';

export interface FilterInterface {
  category: string;
  service: string;
  name: string;
}

function useFilter(data: HotelDetails[], userInput: FilterInterface) {
  const [filter, setFilter] = React.useState<FilterInterface>(userInput);
  const [hotels, setHotels] = React.useState(data);
  const results: HotelDetails[] = data;
  const [letters, setLetters] = React.useState([] as string[]);

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
    console.log(value);
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

        console.log(match);

        console.log(results);

        return match;
      }),
    );

    setFilter(filter);
  }

  console.log(hotels);

  React.useEffect(() => {
    extractLetters(hotels);
  }, [hotels, results]);

  return {
    hotels,
    results,
    letters,
    filter,
    handleFilter,
  };
}

export default useFilter;
