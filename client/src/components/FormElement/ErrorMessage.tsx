import styled, { css } from 'styled-components';

export const ErrorMessage = styled.span`
  text-align: left;
  color: ${props => props.theme.colors.error};
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
`;
