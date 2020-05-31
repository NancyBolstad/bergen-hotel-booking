import * as React from 'react';
import { PlainBanner } from '../../components/Banner';
import { Context } from '../../context/GlobalContext';
import { HotelCardsList } from '../../components/HotelCards';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);
  return (
    <>
      {!!favorites && favorites.length > 0 ? (
        <>
          <PlainBanner title="My Favorites" backgroundColor="surface" />
          <HotelCardsList list={favorites} />
        </>
      ) : (
        <PlainBanner
          title="Favorites list is empty."
          large
          buttonText="Explore accommodations"
          redirectLink="/accommodations"
          widthNavigationIcon
          isTitleColorRed
        />
      )}
    </>
  );
};

export default Favorites;
