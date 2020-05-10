import * as React from 'react';
import { search } from '../../util/icons';
import { Wrapper, SearchFormWrapper } from './styles';

interface Props {
  handler?: (value: string) => any;
  placeHolderText?: string;
}

export const SearchForm: React.FunctionComponent<Props> = ({ handler, placeHolderText }) => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  return (
    <Wrapper>
      <SearchFormWrapper>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            if (handler) handler(searchValue);
          }}
        >
          <input
            id="searchForm"
            className="searchInput"
            type="text"
            aria-label={placeHolderText ? placeHolderText : 'Search form'}
            placeholder={placeHolderText ? placeHolderText : 'Search her'}
            value={searchValue}
            onChange={(e: any) => {
              e.preventDefault();
              setSearchValue(e.target.value);
              if (handler) handler(e.target.value);
            }}
          />
          <button type="submit" aria-label={'Submit search form'}>
            Search{search}
          </button>
        </form>
      </SearchFormWrapper>
    </Wrapper>
  );
};

export default SearchForm;
