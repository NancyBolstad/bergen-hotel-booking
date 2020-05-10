import styled from 'styled-components';
import { Flex, FlexKid } from '../Flex/index';

export const ContentWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.secondaryVariant};
`;

export const ServiceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: calc(-${props => props.theme.spacing.l}rem / 2);
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const Item = styled(FlexKid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(${props => props.theme.spacing.xs}rem / 2);
  text-decoration: none;
  margin: ${props => props.theme.spacing.l}rem 0;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: calc(${props => props.theme.spacing.l}rem / 2);
  }

  @media screen and (min-width: 1280px) {
    width: 33.333%;
    margin: ${props => props.theme.spacing.m}rem 0;
  }

  svg {
    height: 5.625rem;
    width: 5.937rem;
    fill: ${props => props.theme.colors.primary};
  }
`;
