import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    overflow-x:hidden;
    color: ${props => props.theme.colors.onBackground};
    background:${props => props.theme.colors.background};
    width: 100%;
    height: 100%;
    line-height: 22px;
    font-family: ${props => props.theme.fonts.b1.family};
    font-weight: ${props => props.theme.fonts.b1.weight};
    font-size: ${props => props.theme.fonts.b1.weight}rem;
    ${props =>
      props.theme.fonts.b1.lineHeight &&
      css`
        line-height: ${props.theme.fonts.b1.lineHeight};
      `};

    ${props =>
      props.theme.fonts.b1.mediaQueries &&
      css`
        @media (min-width: ${props.theme.fonts.b1.mediaQueries[0].query}px) {
          ${props.theme.fonts.b1.mediaQueries[0].family &&
            css`
              font-family: ${props.theme.fonts.b1.mediaQueries[0].family};
            `};
          ${props.theme.fonts.b1.mediaQueries[0].weight &&
            css`
              font-weight: ${props.theme.fonts.b1.mediaQueries[0].weight};
            `};
          ${props.theme.fonts.b1.mediaQueries[0].size &&
            css`
              font-size: ${props.theme.fonts.b1.mediaQueries[0].size}rem;
            `};
          ${props.theme.fonts.b1.mediaQueries[0].lineHeight &&
            css`
              line-height: ${props.theme.fonts.b1.mediaQueries[0].lineHeight};
            `};
        }
      `}
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
