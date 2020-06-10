import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.s}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  button {
    margin-top: ${props => props.theme.spacing.s}rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ErrorMessage = styled.span`
  text-align: left;
  color: ${props => props.theme.colors.error};

  font-family: ${props => props.theme.fonts.b3.family};
  font-weight: ${props => props.theme.fonts.b3.weight};
  font-size: ${props => props.theme.fonts.b3.weight}rem;
  ${props =>
    props.theme.fonts.b3.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b3.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b3.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b3.mediaQueries[0].query}px) {
        ${props.theme.fonts.b3.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b3.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b3.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b3.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b3.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b3.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b3.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b3.mediaQueries[0].lineHeight};
          `};
      }
    `}
`;
