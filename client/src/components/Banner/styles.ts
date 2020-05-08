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

export const SearchBannerBackground = styled(BackgroundImage)`
  width: 100%;
  height: 55vh;
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
      height: 204px;
      padding: ${props => props.theme.spacing.l}rem 0;
    `}
`;
