import React from 'react';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { HotelDetails } from '../../types/response';
import { SearchBanner } from '../../components/Banner';
import IconList from '../../components/IconList';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [currentData, setCurrentData] = React.useState<HotelDetails[]>([]);
  const [filtedData, setFilterData] = React.useState<HotelDetails[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>();

  const image = {
    url:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589114470/holidaza/photo-1580946443359-1126222f9224_fjvl7g.jpg',
    alt: 'Bergen scenery',
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
        title="Book your holiday in Bergen at best price"
        placeHolderText="Search for hotels"
      />
      <IconList />
    </main>
  );
};

export default Home;
