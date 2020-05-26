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
import { Context } from '../../context/GlobalContext';
import { HotelDetails } from '../../types/response';
import validateUserInput from '../../util/validateUserInput';
import useFilter, { FilterInterface } from '../../hooks/useFilter';
import Typography from '../Typography';
import { HotelCardVariant } from '../HotelCards/index';
import useOutsideClick from '../../hooks/useOutsideClick';
import { ButtonInternal } from '../Button/Button';
import { search } from '../../util/icons';

interface Props {
  dataSet?: HotelDetails[];
  placeHolderText?: string;
  handler?: (input: string) => any;
}

export const SearchForm: React.FunctionComponent<Props> = ({ dataSet, placeHolderText }) => {
  const isMobile = useIsMobile();
  let history = useHistory();
  const localContext = React.useContext(Context);
  const { hotels, filter, handleFilter } = useFilter({
    data: localContext.default,
  });
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
            <ButtonInternal
              to={`/search?name=${filter.name}&category=${filter.category}&service=${filter.service}`}
              variant="secondary"
              size="medium"
              aria-label="View more search results"
            >
              More Results
            </ButtonInternal>
          )}
        </SearchResultsWrapper>
      )}
    </Wrapper>
  );
};

export default SearchForm;
