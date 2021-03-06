import styled, { css } from 'styled-components';
import Typography from '../Typography/Typography';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';
import { IColors } from '../../types/theme';
import { Flex } from '../Layout/';

const Wrapper = styled(Flex)`
  flex-direction: column;

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    h2 {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
  }
`;

const Card = styled.a<{ extraSpace?: boolean; backgroundColor?: keyof IColors }>`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => props.theme.colors.onBackground};
  border: 1px solid white;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  transition: all 0.15s ease-in-out;
  position: relative;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.secondaryVariant};
    border: 1px solid ${props => props.theme.colors.secondaryVariant};
    p {
      color: ${props => props.theme.colors.onBackground};
    }
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    width: calc(50% - ${props => props.theme.spacing.m}rem);
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    width: calc(25% - ${props => props.theme.spacing.m}rem);
    margin-bottom: ${props => props.theme.spacing.m}rem;
  }

  ${props =>
    props.extraSpace &&
    css`
      padding: ${props => props.theme.spacing.s}rem;
    `}

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.theme.colors[props.backgroundColor]};
    `}
`;

const FeaturedImages = styled(Slider)`
  height: 80px;
`;

const SectionTitle = styled(Typography)<{ element: 'h2' }>`
  text-transform: capitalize;
`;

const More = styled.div`
  margin: ${props => props.theme.spacing.s}rem auto;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    padding-top: ${props => props.theme.spacing.l}rem;
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    margin: ${props => props.theme.spacing.m}rem auto;
  }
`;

const CardVariant = styled.a<{
  miniCard?: boolean;
  isMobile?: boolean;
  busy?: boolean;
  removed?: boolean;
}>`
  display: flex;
  flex-direction: row;
  flex: 1;
  text-decoration: none;
  color: ${props => props.theme.colors.onBackground};
  border: 1px solid white;
  margin: calc(${props => props.theme.spacing.s}rem / 2);
  padding: ${props => props.theme.spacing.xs}rem;
  transition: all 0.15s ease-in-out;
  position: relative;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;
  width: 100%;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.secondaryVariant};
    border: 1px solid ${props => props.theme.colors.secondaryVariant};

    p {
      color: ${props => props.theme.colors.onBackground};
    }
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    margin: ${props => props.theme.spacing.s}rem 0;
    padding: 0;
  }


  ${props =>
    props.miniCard &&
    props.isMobile &&
    css`
      flex-direction: column;
      padding: 0;
      margin: ${props => props.theme.spacing.s}rem 0;

      @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
        flex-direction: row;
      }
    `}

  ${props =>
    props.busy &&
    css`
      opacity: 0.5;
    `}

  ${props =>
    props.removed &&
    css`
      display: none;
    `}

`;

const SliderVariant = styled(Slider)`
  height: 88px;
`;

const CardVariantLeft = styled.div`
  flex: 1;

  div[role='img'] {
    height: 100%;
  }
`;
const CardVariantRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 2;
  padding: 0 ${props => props.theme.spacing.xs}rem;
  position: relative;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    padding: ${props => props.theme.spacing.m}rem;
  }
`;

const LikeButtonWrapper = styled.div<{ positionAbsolute?: boolean }>`
  display: flex;
  justify-content: flex-end;

  ${props =>
    props.positionAbsolute &&
    css`
      position: absolute;
      top: 0px;
      right: 0;
    `}
`;

const LikeIcon = styled(Button)<{ isLiked: boolean }>`
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.onBackground};
    margin-top: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.isLiked === true &&
    css`
      svg {
        fill: ${props => props.theme.colors.primary};
      }
    `}

  &:hover,
  &:focus {
    background-color: transparent;
    border: none;
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;

const MiniImage = styled.img`
  height: 11.4375rem;
  width: 100%;
`;

const CategoryBadge = styled(Typography)<{ element: 'span'; miniCard?: boolean }>`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onSecondary};
  text-transform: capitalize;
  padding: ${props => props.theme.spacing.xs}rem;
  position: absolute;
  display: block;
  font-size: 14px;
  top: 0px;
  left: 0px;
  z-index: 900;

  ${props =>
    props.miniCard &&
    css`
      top: 0px;
      left: 0px;
      border-radius: 0px;
    `}
`;

const ServiceLabel = styled(Typography)`
  padding: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.onBackground};
  margin-right: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 400;

  ${Card}:hover && {
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.white};
  }

  ${CardVariant}:hover & {
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.white};
  }
`;

export {
  Wrapper,
  Card,
  SectionTitle,
  More,
  FeaturedImages,
  CardVariant,
  CardVariantLeft,
  CardVariantRight,
  SliderVariant,
  LikeIcon,
  LikeButtonWrapper,
  MiniImage,
  CategoryBadge,
  ServiceLabel,
};
