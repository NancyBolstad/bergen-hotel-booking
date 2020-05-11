import * as React from 'react';
import { search } from '../../util/icons';
import {
  Wrapper,
  Form,
  SearchInputField,
  SearchSubmitButton,
  SearchResultsWrapper,
} from './styles';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import useIsMobile from '../../hooks/useIsMobile';

interface Props {
  handler?: (value: string) => any;
  placeHolderText?: string;
}

export const SearchForm: React.FunctionComponent<Props> = ({ handler, placeHolderText }) => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [showResults, setShowResults] = React.useState(false);
  const isMobile = useIsMobile();
  React.useEffect(() => {
    setShowResults(true);
  }, [searchValue]);

  return (
    <Form
      onSubmit={(e: any) => {
        e.preventDefault();
        if (handler) handler(searchValue);
      }}
    >
      <SearchInputField
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
      <SearchSubmitButton type="submit" aria-label={'Submit search form'} isMobile={isMobile}>
        {!isMobile && 'Search'}
        {search}
      </SearchSubmitButton>
    </Form>
  );
};

export default SearchForm;
