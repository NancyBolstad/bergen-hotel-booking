import React, { FunctionComponent, createContext, useState, useEffect } from 'react';
import storage from '../util/storage';
import { string } from 'yup';

export interface UserState {
  name: string;
  loggedIn: boolean;
  email?: string;
  profileImage?: string;
  tel?: number;
  address?: string;
}

const defaultUser: UserState = {
  name: '',
  loggedIn: false,
};

const UserContext = createContext({
  user: defaultUser,
  setUser: (data: UserState) => {},
  logOut: () => {},
});

function readUserDataFromStorage(): UserState {
  const userData = storage.getUnserialize<UserState>('user');
  return userData ? userData : defaultUser;
}

const UserProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultUser);

  useEffect(() => {
    const userData = readUserDataFromStorage();
    setState(userData);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: state,
        setUser: data => {
          setState(data);
          storage.setSerialize('user', data);
        },
        logOut: () => {
          setState({
            ...state,
            loggedIn: false,
          });

          storage.delete('user');
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider, defaultUser };
