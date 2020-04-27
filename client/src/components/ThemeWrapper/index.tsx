import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from '../../util/defaultTheme';
import GlobalContext from '../../context/GlobalContext';
import { GlobalStyle } from './styles';
import { ContrastContext } from '../../context/Contrast';

export interface Props {}

const ThemeWrapper: React.FunctionComponent<Props> = ({ children }) => {
  const { theme } = React.useContext(ContrastContext);

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
      <div>
        <GlobalStyle />
        <GlobalContext>
          <div>{children}</div>
        </GlobalContext>
      </div>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
