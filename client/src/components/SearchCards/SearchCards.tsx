import * as React from 'react';
import { search } from '../../util/icons';
import { Wrapper, SearchFormWrapper } from './styles';

interface Props {
  handler: (value: string) => any;
}

export const SearchCards: React.FunctionComponent<Props> = ({ handler }) => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  return (
    <Wrapper>
      <SearchFormWrapper>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            handler(searchValue);
          }}
        >
          <input
            id="searchForm"
            className="searchInput"
            type="text"
            aria-label="Search"
            placeholder="Search for video games"
            value={searchValue}
            onChange={(e: any) => {
              e.preventDefault();
              setSearchValue(e.target.value);
              handler(e.target.value);
            }}
          />
          <button type="submit" aria-label="Search for recipe name">
            {search}
          </button>
        </form>
      </SearchFormWrapper>
    </Wrapper>
  );
};

export default SearchCards;
