import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBarContainer, CloseSearchButton } from './styles';
import { SearchInput, Form } from '../FormElement';
import { cross } from '../../util/icons';
import validateUserInput from '../../util/validateUserInput';
import useOutsideClick from '../../hooks/useOutsideClick';

interface Props {
  toggler: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FunctionComponent<Props> = ({ toggler }) => {
  const location = useLocation();
  const [searchValue, setSearchValue] = React.useState('');
  const toggleArea = React.useRef(null);

  useOutsideClick(toggleArea, () => {
    toggler(false);
  });

  React.useEffect(() => {
    setSearchValue('');
  }, [location]);

  return (
    <SearchBarContainer ref={toggleArea}>
      <Form
        role="search"
        onSubmit={event => {
          event.preventDefault();
          if (validateUserInput(searchValue)) {
            toggler(false);
            window.location.href = `/search?name=${searchValue}&category=&service=`;
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
