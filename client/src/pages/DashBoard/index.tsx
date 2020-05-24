import React from 'react';
import { UserContext } from '../../context/UserContext';
import DashboardLayout from './DashboardLayout';

interface Props {}

export const DashBoard: React.FunctionComponent<Props> = () => {
  const { user } = React.useContext(UserContext);
  return <DashboardLayout user={user} />;
};

export default DashBoard;
