import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  .establishment {
    text-transform: capitalize;
  }
`;

export const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  text-transform: capitalize;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.size}rem;
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
`;

export const TableRow = styled.tr`
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
  text-align: center;
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.surface};
  }
  &:hover {
    border: 1px solid ${props => props.theme.colors.onBackground};
    font-weight: 600;
    cursor: pointer;
  }
`;

export const RemovableRow = styled(TableRow)<{ remove?: boolean; busy?: boolean }>`
  ${props =>
    props.busy === true &&
    css`
      opacity: 0.5;
    `};

  ${props =>
    props.remove === true &&
    css`
      display: none;
    `};
`;

export const TableDataCell = styled.td`
  height: 100%;
  padding: ${props => props.theme.spacing.xs}rem;
`;

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  background: transparent;
  svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.onSurface};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;
