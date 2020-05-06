import * as React from 'react';
import HomeContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Slider from '../../components/Slider/';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);
  return (
    <HomeContent>
      {favorites.length < 1 ? <h1>Nothing her</h1> : <Slider slides={favorites} />}
    </HomeContent>
  );
};

export default Favorites;
