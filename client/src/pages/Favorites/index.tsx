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
          title="Favorites accommodations"
          text="You don't have any saved favorite."
          large
          buttonText="Select from accommodations list"
          redirectLink="/accommodations"
        />
      )}
    </>
  );
};

export default Favorites;
