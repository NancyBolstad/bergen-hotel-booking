import React from 'react';
import { UserContext } from '../../context/UserContext';
import DashboardLayout from '../../components/DashBoard/DashboardLayout';
import PlainBanner from '../../components/Banner/PlainBanner';

interface Props {}

export const DashBoard: React.FunctionComponent<Props> = () => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <PlainBanner title="Holidaze Dashboard" />
      <DashboardLayout user={user} />
    </>
  );
};

export default DashBoard;
