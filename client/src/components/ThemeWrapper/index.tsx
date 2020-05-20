import * as React from 'react';
import { ThemeProvider } from 'styled-components';
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
      <div>
        <GlobalStyle />
        <UserProvider>
          <GlobalContext>
            <div>{children}</div>
          </GlobalContext>
        </UserProvider>
      </div>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
