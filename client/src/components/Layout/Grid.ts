import styled, { css } from 'styled-components';
import { BackgroundImage } from './BackgroundImage';

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing.xs}rem;
  grid-auto-rows: 260px;
  grid-template-columns: 1fr;
  min-height: 0;
  min-width: 0;
  overflow: auto;

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    grid-auto-rows: 306px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${props => props.theme.spacing.m}rem;
  }
`;

interface GridItemProps {
  column?: string;
  columnEndSpan?: number;
  row?: string;
  rowEndSpan?: number;
}

const GridItem = styled(BackgroundImage)<GridItemProps>`
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props =>
    props.column &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
        grid-column: ${props.column};
      }
    `};

  ${props =>
    props.columnEndSpan &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
        grid-column-end: span ${props.columnEndSpan};
      }
    `}

  ${props =>
    props.rowEndSpan &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
        grid-column-end: span ${props.rowEndSpan};
      }
    `}

  ${props =>
    props.row &&
    css`
      grid-row: ${props.row};
    `};
`;

const GridItemLink = GridItem.withComponent('a');

export { Grid, GridItem, GridItemLink };
