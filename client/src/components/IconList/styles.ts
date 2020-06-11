import styled from 'styled-components';
import { Flex, FlexKid } from '../Layout/';

export const ContentWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.secondaryVariant};
`;

export const ServiceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    justify-content: space-between;
  }
`;

export const Item = styled(FlexKid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: ${props => props.theme.spacing.m}rem 0;
  text-align: center;

  svg {
    height: 2.625rem;
    width: 2.937rem;
    fill: ${props => props.theme.colors.primary};
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    width: 33.333%;
  }
`;
