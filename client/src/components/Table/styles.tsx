import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  .establishment {
    text-transform: capitalize;
  }
`;

export const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.xs}rem 0;
  height: 3.25rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  ${props => createFontStyles(props.theme.fonts.b2)};
  text-transform: capitalize;
`;

export const TableRow = styled.tr`
  ${props => createFontStyles(props.theme.fonts.b1)};
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.surface};
  }
  &:hover {
    border: 1px solid ${props => props.theme.colors.onBackground};
  }
`;

export const RemovableRow = styled(TableRow)<{ remove?: boolean; busy?: boolean }>`
  ${props =>
    props.busy === true &&
    css`
      opacity: 0.8;
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
