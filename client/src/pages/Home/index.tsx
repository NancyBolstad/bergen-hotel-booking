import React from 'react';
import Typography from '../../components/Typography/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { HotelDetails } from '../../types/response';
import SearchForm from '../../components/SearchForm/SearchForm';
import CardsList from '../../components/CardsList/';
import Loader from '../../components/Loader';
import Select from '../../components/Select';
import validateUserInput from '../../util/validateUserInput';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [currentData, setCurrentData] = React.useState<HotelDetails[]>([]);
  const [filtedData, setFilterData] = React.useState<HotelDetails[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>();

  function filter(value: string) {
    setLoading(true);
    const lowerCaseSearchValue = value.toLowerCase();
    const newArray: HotelDetails[] = localContext.default.filter(element => {
      const lowerGameName = element.name?.toLowerCase();
      return lowerGameName?.startsWith(lowerCaseSearchValue);
    });
    setFilterData(newArray);
    if (validateUserInput(value)) {
      setMessage(`Find ${newArray.length} cards for ${value}`);
    } else {
      setMessage('');
    }
    setLoading(false);
  }

  function sortSearchResults(criteria: string) {
    setLoading(true);

    if (criteria === 'default') {
      setCurrentData(filtedData.length > 0 ? filtedData : localContext.default);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  }, [loading]);

  React.useEffect(() => {
    setCurrentData(localContext.default);
  }, [localContext, loading]);

  React.useEffect(() => {
    if (!!filtedData) {
      setCurrentData(filtedData);
    }
  }, [filtedData]);

  return (
    <MainContent>
      <Typography
        element="h1"
        variant="h1"
        content="Search RAWG Video Games"
        bottom={32}
        top={32}
        bottomDesktop={48}
        topDesktop={48}
        isPrimaryColor
      />
      <SearchForm handler={filter} />
      {!!message && message.length > 0 && (
        <Typography variant="b2" element="p" content={message} isPrimaryColor />
      )}
      {!loading && (filtedData.length > 1 || currentData.length > 1) && (
        <Select
          label="Sort by:"
          options={[
            {
              value: 'default',
              label: 'Default',
              isSelected: true,
            },
            {
              value: 'alphabetically',
              label: 'Alphabetically',
            },
            {
              value: 'popularity',
              label: 'Popularity',
            },
          ]}
          handler={sortSearchResults}
        />
      )}
      {loading ? <Loader /> : <CardsList cards={currentData} />}
    </MainContent>
  );
};

export default Home;
