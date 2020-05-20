import React from 'react';
import { Context } from '../../context/GlobalContext';
import { HotelCardsList } from '../../components/HotelCards';
import Loader from '../../components/Loader';
import { UserContext } from '../../context/UserContext';
import { PlainBanner } from '../../components/Banner';

interface Props {}

export const DashBoard: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const { user } = React.useContext(UserContext);
  return (
    <main>
      <PlainBanner title={`Welcome back ${user.name}!`} isTitleColorRed />
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="Establishments"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 6)}
        />
      )}
    </main>
  );
};

export default DashBoard;
