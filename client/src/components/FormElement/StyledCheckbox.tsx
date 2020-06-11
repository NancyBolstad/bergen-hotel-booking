import styled, { css } from 'styled-components';

export const StyledCheckboxWrapper = styled.label`
  margin-top: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: ${props => props.theme.colors.onBackground};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${props => props.theme.fonts.b1.family};
  font-weight: ${props => props.theme.fonts.b1.weight};
  font-size: ${props => props.theme.fonts.b1.size}rem;
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

  input {
    margin-right: ${props => props.theme.spacing.xs}rem;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.onBackground};
    background-color: ${props => props.theme.colors.background};
    margin-top: ${props => props.theme.spacing.xs}rem;
    @supports (-webkit-touch-callout: none) {
      border-radius: 0;
    }
  }
  p {
    margin: 0;
  }
`;
