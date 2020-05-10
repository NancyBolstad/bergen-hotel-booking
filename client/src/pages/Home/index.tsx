import React from 'react';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { HotelDetails } from '../../types/response';
import { SearchBanner } from '../../components/Banner';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [currentData, setCurrentData] = React.useState<HotelDetails[]>([]);
  const [filtedData, setFilterData] = React.useState<HotelDetails[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>();

  const image = {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo',
  };

  React.useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 3000);
  }, [loading]);

  React.useEffect(() => {
    setCurrentData(localContext.default);
  }, [localContext, loading]);

  return (
    <main>
      <SearchBanner
        figure={image}
        title="Find hotels in Bergen at best price"
        placeHolderText="Search for hotels"
      />
      <SearchBanner
        figure={image}
        title="Find hotels in Bergen at best price"
        placeHolderText="Search for hotels"
      />
    </main>
  );
};

export default Home;
