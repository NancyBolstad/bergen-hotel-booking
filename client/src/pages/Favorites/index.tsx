import * as React from 'react';
import HomeContent from '../../components/MainContent';
//import { Context } from '../../context/GlobalContext';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  //const { favorites } = React.useContext(Context);
  return <HomeContent></HomeContent>;
};

export default Favorites;
