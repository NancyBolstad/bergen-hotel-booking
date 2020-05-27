import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Wrapper,
  Form,
  SearchInputField,
  SearchSubmitButton,
  SearchResultsWrapper,
} from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import { HotelDetails } from '../../types/response';
import validateUserInput from '../../util/validateUserInput';
import useFilter, { FilterInterface } from '../../hooks/useFilter';
import Typography from '../Typography';
import { HotelCardVariant } from '../HotelCards/index';
import useOutsideClick from '../../hooks/useOutsideClick';
import { ButtonLink } from '../Button/Button';
import { search } from '../../util/icons';

interface Props {
  dataSet?: HotelDetails[];
  placeHolderText?: string;
  handler?: (input: string) => any;
}

export const SearchForm: React.FunctionComponent<Props> = ({ dataSet, placeHolderText }) => {
  const isMobile = useIsMobile();
  let history = useHistory();
  const { hotels, filter, handleFilter } = useFilter({});
  const [showResults, setShowResults] = React.useState(false);
  const register = React.useRef(null);

  function updateUrl(filter: FilterInterface) {
    history.push(
      `/search?name=${filter.name}&category=${filter.category}&service=${filter.service}`,
    );
  }

  useOutsideClick(register, () => {
    setShowResults(false);
  });

  return (
    <Wrapper isMobile={isMobile}>
      <Form
        role="search"
        onSubmit={e => {
          e.preventDefault();
          updateUrl(filter);
          handleFilter('name', filter.name);
        }}
      >
        <SearchInputField
          type="search"
          autoComplete="off"
          aria-label="Search"
          placeholder={placeHolderText ? placeHolderText : 'Search her ...'}
          onChange={e => {
            e.preventDefault();
            if (e.target.value.length > 0 && validateUserInput(e.target.value)) {
              handleFilter('name', e.target.value);
              setShowResults(true);
            } else {
              setShowResults(false);
            }
          }}
        />
        <SearchSubmitButton
          type="submit"
          aria-label="Submit search form"
          title="Submit search form"
          isMobile={isMobile}
        >
          {!isMobile && 'Search'}
          {search}
        </SearchSubmitButton>
      </Form>
      {showResults && (
        <SearchResultsWrapper isMobile={isMobile} ref={register}>
          <Typography variant="b2" element="h3" content={`Search results for "${filter.name}"`} />
          {hotels.slice(0, 4).map(hotel => (
            <>
              <HotelCardVariant card={hotel} miniCard />
            </>
          ))}
          {hotels && hotels.length > 5 && (
            <ButtonLink
              href={`/search?name=${filter.name}&category=${filter.category}&service=${filter.service}`}
              variant="secondary"
              size="medium"
              aria-label="View more search results"
            >
              More Results
            </ButtonLink>
          )}
        </SearchResultsWrapper>
      )}
    </Wrapper>
  );
};

export default SearchForm;
