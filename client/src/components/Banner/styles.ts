import styled, { css } from 'styled-components';
import { BackgroundImage } from '../Image';
import Typography from '../Typography';

type alignVariant = 'flex-start' | 'center' | 'flex-end';

export const FlexParent = styled.div<{ isImageRight?: boolean; isMobile: boolean }>`
  display: flex;
  flex-direction: ${props => (props.isImageRight ? 'column' : 'column-reverse')};

  ${props =>
    props.isMobile === false &&
    css`
      flex-direction: ${props.isImageRight ? 'row-reverse' : 'row'};
    `}
`;

export const FlexKid = styled(BackgroundImage)<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${props => (props.isMobile ? '100%' : '50%')};
  flex-grow: 1;
  min-height: 23.75rem;
`;

export const PlainBannerContent = styled(BackgroundImage)<{ align?: alignVariant }>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.align ? props.align : 'center')};
  align-items: ${props => (props.align ? props.align : 'center')};
  width: 100%;
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
      height: 75vh;
    `}
`;

export const SearchBannerContent = styled(BackgroundImage)<{ isDesktop?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.spacing.m}rem 0;

  ${props =>
    props.isDesktop &&
    css`
      position: relative;
      height: 8.125rem;
      padding: 0;

      div {
        position: absolute;
        bottom: -19px;
        width: 100%;
        max-width: 650px;
        margin: 0 auto;

        div {
          padding: ${props => props.theme.spacing.m}rem 0;
        }
      }
    `}
`;
