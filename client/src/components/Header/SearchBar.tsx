import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchBarContainer, CloseSearchButton } from './styles';
import { SearchInput, Form } from '../FormElement';
import { cross } from '../../util/icons';
import validateUserInput from '../../util/validateUserInput';

interface Props {
  toggler: (condition: boolean) => void;
}

const SearchBar: React.FunctionComponent<Props> = ({ toggler }) => {
  let history = useHistory();
  const location = useLocation();
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    setSearchValue('');
  }, [location]);

  console.log(location);

  return (
    <SearchBarContainer>
      <Form
        role="search"
        onSubmit={event => {
          event.preventDefault();
          if (validateUserInput(searchValue)) {
            toggler(false);
            if (location.pathname === '/search') {
              window.location.reload();
            }
            history.push(`/search?name=${searchValue}&category=&service=`);
          }
        }}
      >
        <SearchInput
          type="search"
          autoComplete="off"
          aria-label="Search form"
          placeholder="Search her ..."
          onChange={event => {
            event.preventDefault();
            setSearchValue(event.target.value);
          }}
        />
      </Form>
      <CloseSearchButton
        variant="tertiary"
        size="small"
        aria-label="Close search bar"
        onClick={event => {
          event.preventDefault();
          toggler(false);
        }}
      >
        {cross}
      </CloseSearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
