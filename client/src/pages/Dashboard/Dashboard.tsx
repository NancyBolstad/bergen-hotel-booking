import React from 'react';
import { Helmet } from 'react-helmet';
import { UserContext } from '../../context/UserContext';
import DashboardLayout from '../../components/DashBoard/DashboardLayout';
import PlainBanner from '../../components/Banner/PlainBanner';
interface Props {}

export const DashBoard: React.FunctionComponent<Props> = () => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <Helmet>
        <title>Dashboard Home | Booking hotels with Holidaze Bergen</title>
      </Helmet>
      <PlainBanner title="Holidaze Dashboard" />
      <DashboardLayout user={user} />
    </>
  );
};

export default DashBoard;
