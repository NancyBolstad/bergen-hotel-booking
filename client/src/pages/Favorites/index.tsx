import * as React from 'react';
import HomeContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Slider from '../../components/Slider/';
import Banner from '../../components/Banner';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);
  return (
    <HomeContent>
      {favorites.length < 1 ? (
        <Banner
          title="Favorites"
          content="You don't have any saved favorites."
          buttonText="Select from cards list"
          redirectLink="/"
        />
      ) : (
        <Slider slides={favorites} />
      )}
    </HomeContent>
  );
};

export default Favorites;
