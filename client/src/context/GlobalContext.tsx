import React from 'react';
import useApi from '../hooks/useApi';
import { FavoriteActions, favoriteCardsReducer } from '../reducer/favoriteCardsReducer';
import { Result, Root } from '../types/data';
import { API_BASE_URL, mockResponse, FAVORITES_KEY } from '../util/constants';
import isBrowser from '../util/isBrowser';
import Storage from '../util/storage';

interface Props {}

interface GlobalDataProps {
  default: Result[];
  favorites: Result[];
  dispatch: React.Dispatch<FavoriteActions>;
}

export const Context = React.createContext<GlobalDataProps>({
  default: [],
  favorites: [],
  dispatch: () => null,
});

export const GlobalContext: React.FunctionComponent<Props> = ({ children }) => {
  const { data } = useApi<Root>({
    endpoint: API_BASE_URL,
    fetchOnMount: true,
    initialData: mockResponse,
  });
  const [localData, setLocalData] = React.useState<Result[]>(() => {
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
        default: data.results,
        favorites: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
