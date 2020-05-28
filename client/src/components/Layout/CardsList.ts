import styled from 'styled-components';

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-flow: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: calc(-4rem / 2);

    &::after {
      content: '';
      justify-content: flex-start;
      width: calc(30% - ${props => props.theme.spacing.m / 2}rem);
    }
  }
`;
