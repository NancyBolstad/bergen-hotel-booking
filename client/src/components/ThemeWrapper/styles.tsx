import { createGlobalStyle } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export interface Props {}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    overflow-x:hidden;
    color: ${props => props.theme.colors.onBackground};
    background:${props => props.theme.colors.background};
    transition: background-color 0.5s, color 0.5s;
    width: 100%;
    height: 100%;
    line-height: 22px;
    ${props => createFontStyles(props.theme.fonts.b1)}
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
  }
  * {
    box-sizing: border-box;
  }
}
`;
