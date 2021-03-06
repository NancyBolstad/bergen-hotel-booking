import styled from 'styled-components';

export const CardsList = styled.div<{ isEven?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-flow: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    &::after {
      content: '';
      justify-content: center;
      width: calc(
        ${props => (props.isEven ? '25%' : '50%')} - ${props => props.theme.spacing.m / 2}rem
      );
    }

    @media screen and (min-width: 1280px) {
      margin-left: calc(-1rem / 2);
      margin-right: calc(-1rem / 2);
      justify-content: space-between;
    }
  }
`;
