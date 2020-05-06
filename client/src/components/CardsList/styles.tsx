import styled from 'styled-components';

export const CardsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: calc(-${props => props.theme.spacing.s}rem / 2);

    &::after {
      content: '';
      justify-content: flex-start;
      width: calc(31.333% - ${props => props.theme.spacing.m / 2}rem);
    }
  }
`;
