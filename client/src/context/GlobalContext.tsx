import React from 'react';
import useApi from '../hooks/useApi';
import { FavoriteActions, favoriteCardsReducer } from '../reducer/favoriteCardsReducer';
import { HotelDetails, Root } from '../types/response';
import { FAVORITES_KEY } from '../util/constants';
import isBrowser from '../util/isBrowser';
import Storage from '../util/storage';

interface Props {}

interface GlobalDataProps {
  default: HotelDetails[];
  favorites: HotelDetails[];
  dispatch: React.Dispatch<FavoriteActions>;
}

export const Context = React.createContext<GlobalDataProps>({
  default: [],
  favorites: [],
  dispatch: () => null,
});

export const GlobalContext: React.FunctionComponent<Props> = ({ children }) => {
  const { data } = useApi<Root>({
    endpoint: `${process.env.REACT_APP_API_URL}establishments`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [],
    },
  });
  const [localData, setLocalData] = React.useState<HotelDetails[]>(() => {
    const storage = new Storage();
    const localFavorites = storage.get(FAVORITES_KEY);

    return localFavorites !== null ? JSON.parse(localFavorites) : [];
  });

  const [state, dispatch] = React.useReducer(favoriteCardsReducer, localData);

  React.useEffect(() => {
    if (isBrowser()) {
      const storage = new Storage();
      storage.setSerialize(FAVORITES_KEY, state);
      setLocalData(state);
    }
  }, [state]);

  return (
    <Context.Provider
      value={{
        default: data.data,
        favorites: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
