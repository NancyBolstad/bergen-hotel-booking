import styled, { css } from 'styled-components';

export const StyledLabelWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.weight}rem;
  ${props =>
    props.theme.fonts.b2.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b2.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b2.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b2.mediaQueries[0].query}px) {
        ${props.theme.fonts.b2.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b2.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b2.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b2.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b2.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b2.mediaQueries[0].lineHeight};
          `};
      }
    `}

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

export const StyledLabel = styled.label<{ isCheckbox?: boolean; isSameLine?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${props => props.theme.spacing.s}rem 0;
  width: 100%;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.weight}rem;
  ${props =>
    props.theme.fonts.b2.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b2.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b2.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b2.mediaQueries[0].query}px) {
        ${props.theme.fonts.b2.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b2.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b2.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b2.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b2.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b2.mediaQueries[0].lineHeight};
          `};
      }
    `}

  ${props =>
    props.isCheckbox &&
    css`
      flex-direction: row;
      align-items: baseline;
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

      input {
        margin-right: ${props => props.theme.spacing.xs}rem;
        @supports (-webkit-touch-callout: none) {
          border-radius: 0;
        }
      }
      p {
        margin: 0;
      }
    `}

  ${props =>
    props.isSameLine &&
    css`
      flex-direction: row;
      align-items: center;
      input {
        margin-left: ${props => props.theme.spacing.s}rem;
      }
      span {
        min-width: 40px;
      }
    `}
`;
