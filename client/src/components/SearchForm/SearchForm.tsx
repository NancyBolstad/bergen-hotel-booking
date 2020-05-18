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
//import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import useIsMobile from '../../hooks/useIsMobile';
//import { Context } from '../../context/GlobalContext';
import { HotelDetails } from '../../types/response';
//import Loader from '../../components/Loader';
import validateUserInput from '../../util/validateUserInput';

interface Props {
  dataSet?: HotelDetails[];
  placeHolderText?: string;
  handler?: (input: string) => any;
}

export const SearchForm: React.FunctionComponent<Props> = ({ dataSet, placeHolderText }) => {
  const isMobile = useIsMobile();
  //const localContext = React.useContext(Context);
  //const [searchData, setSearchData] = React.useState<HotelDetails[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [showResults, setShowResults] = React.useState(false);
  //const [showDefault, setShowDefault] = React.useState(false);
  React.useEffect(() => {
    setShowResults(validateUserInput(searchValue));
  }, [searchValue]);
  let history = useHistory();

  console.log({ searchValue });

  return (
    <Wrapper isMobile={isMobile}>
      <Form
        onSubmit={e => {
          e.preventDefault();

          history.push(`/search?q=${searchValue}`);
        }}
      >
        <SearchInputField
          id="searchForm"
          className="searchInput"
          type="search"
          autoComplete="off"
          aria-label={placeHolderText ? placeHolderText : 'Search form'}
          placeholder={placeHolderText ? placeHolderText : 'Search her'}
          value={searchValue}
          onChange={e => {
            e.preventDefault();
            setSearchValue(e.target.value);
          }}
        />
        <SearchSubmitButton type="submit" aria-label={'Submit search form'} isMobile={isMobile}>
          {!isMobile && 'Search'}
          {search}
        </SearchSubmitButton>
      </Form>
      {showResults && (
        <SearchResultsWrapper isMobile={isMobile}>
          <h1>Hello</h1>
        </SearchResultsWrapper>
      )}
    </Wrapper>
  );
};

export default SearchForm;
