import * as React from 'react';
import { search } from '../../util/icons';
import {
  Wrapper,
  Form,
  SearchInputField,
  SearchSubmitButton,
  SearchResultsWrapper,
} from './styles';
import { useHistory } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
import { Context } from '../../context/GlobalContext';
import { HotelDetails } from '../../types/response';
import validateUserInput from '../../util/validateUserInput';
import useFilter, { FilterInterface } from '../../hooks/useFilter';
import Typography from '../Typography';
import { HotelCardVariant } from '../HotelCards/index';
import useOutsideClick from '../../hooks/useOutsideClick';
import { ButtonInternal } from '../Button/Button';

interface Props {
  dataSet?: HotelDetails[];
  placeHolderText?: string;
  handler?: (input: string) => any;
}

export const SearchForm: React.FunctionComponent<Props> = ({ dataSet, placeHolderText }) => {
  const isMobile = useIsMobile();
  let history = useHistory();
  const localContext = React.useContext(Context);
  const [searchFilter, setSearchFilter] = React.useState({ category: '', service: '', name: '' });
  const { hotels, filter, handleFilter } = useFilter(localContext.default, searchFilter);
  const [showResults, setShowResults] = React.useState(false);
  const register = React.useRef(null);

  function updateUrl(filter: FilterInterface) {
    history.push(
      `/search?accommodationName=${filter.name}&category=${filter.category}&service=${filter.service}`,
    );
  }

  useOutsideClick(register, () => {
    setShowResults(false);
  });

  return (
    <Wrapper isMobile={isMobile}>
      <Form
        onSubmit={e => {
          e.preventDefault();
          updateUrl(filter);
        }}
      >
        <SearchInputField
          id="searchForm"
          className="searchInput"
          type="search"
          autoComplete="off"
          aria-label={placeHolderText ? placeHolderText : 'Search form'}
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
        <SearchSubmitButton type="submit" aria-label={'Submit search form'} isMobile={isMobile}>
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
            <ButtonInternal
              to={`/search?name=${filter.name}&category=${filter.category}&service=${filter.service}`}
              variant="secondary"
              size="medium"
              aria-label="View more search results"
            >
              View more search results
            </ButtonInternal>
          )}
        </SearchResultsWrapper>
      )}
    </Wrapper>
  );
};

export default SearchForm;
