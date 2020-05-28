import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryParamProvider } from 'use-query-params';
import { defaultTheme, darkTheme } from '../../util/defaultTheme';
import GlobalContext from '../../context/GlobalContext';
import { GlobalStyle } from './styles';
import { ContrastContext } from '../../context/ContrastContext';
import { UserProvider } from '../../context/UserContext';

export interface Props {}

const ThemeWrapper: React.FunctionComponent<Props> = ({ children }) => {
  const { theme } = React.useContext(ContrastContext);

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
      <GlobalStyle />
      <UserProvider>
        <QueryParamProvider>
          <GlobalContext>
            <div>{children}</div>
          </GlobalContext>
        </QueryParamProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
