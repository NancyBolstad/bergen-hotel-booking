import styled, { css } from 'styled-components';
import { BackgroundImage } from '../Layout/BackgroundImage';
import Typography from '../Typography/Typography';

type alignVariant = 'flex-start' | 'center' | 'flex-end';

export const FlexParent = styled.div<{ isImageRight?: boolean }>`
  display: flex;
  flex-direction: column-reverse;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    flex-direction: ${props => (props.isImageRight ? 'row-reverse' : 'row')};
  }
`;

export const FlexColumn = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
  min-height: 23.75rem;
  padding ${props => props.theme.spacing.s}rem 0;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    justify-content: center;
    padding ${props => props.theme.spacing.m}rem;
    width:50%;
  }
`;

export const PlainBannerContent = styled(BackgroundImage)<{
  align?: alignVariant;
  large?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.align ? props.align : 'center')};
  align-items: ${props => (props.align ? props.align : 'center')};
  width: 100%;
  min-height: 15vh;

  ${props =>
    props.large &&
    css`
      height: 75vh;
    `}
`;

export const PlainBannerTitle = styled(Typography)<{ hasBackgroundImage?: boolean }>`
  ${props =>
    props.hasBackgroundImage &&
    css`
      color: ${props => props.theme.colors.white};
    `}
`;

export const SearchBannerBackground = styled(BackgroundImage)<{ isDesktop?: boolean }>`
  width: 100%;
  height: 35vh;
  ${props =>
    props.isDesktop &&
    css`
      height: 60vh;
    `}
`;

export const SearchBannerContent = styled(BackgroundImage)<{ isDesktop?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 100%;
  padding: 0.5rem 0 1.5rem 0;

  ${props =>
    props.isDesktop &&
    css`
      height: 11.5625rem;
      padding: 0;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: ${props => props.theme.spacing.m}rem 0;
    `}
`;

export const InnerTextWrapper = styled.a<{ large?: string }>`
  background-color: ${props => props.theme.colors.secondary};
  width: 15.6875rem;
  height: 8.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  opacity: 0.8;

  $:hover {
    opacity: 0.3;
  }

  h2,
  h3 {
    color: ${props => props.theme.colors.dark};
  }

  @media screen and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    width: 25.6875rem;
    height: 10.3125rem;
  }

  @media screen and (min-width: ${props => props.theme.mediaQueries.large}px) {
    width: ${props => (props.large === 'true' ? '30rem' : '18rem')};
    height: ${props => (props.large === 'true' ? '20rem' : '12rem')};
  }
`;
