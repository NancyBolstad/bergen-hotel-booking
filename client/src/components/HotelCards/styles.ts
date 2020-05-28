import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '../Typography';
import Slider from '../Slider';
import Button from '../Button/Button';
import { IColors } from '../../types/theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    h2 {
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
  padding: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  transition: all 0.15s ease-in-out;
  position: relative;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.secondary};
    h2,
    h3,
    span,
    p {
      color: ${props => props.theme.colors.dark};
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(47% - ${props => props.theme.spacing.xs}rem);
  }

  @media screen and (min-width: 1280px) {
    width: calc(25% - ${props => props.theme.spacing.s}rem);
    margin-bottom: ${props => props.theme.spacing.s}rem;
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
  @media screen and (min-width: 768px) {
    padding-top: ${props => props.theme.spacing.l}rem;
  }

  @media screen and (min-width: 1280px) {
    margin: ${props => props.theme.spacing.m}rem auto;
  }
`;

const CardVariant = styled(Link)`
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

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.secondary};
    h2,
    h3,
    span,
    p {
      color: ${props => props.theme.colors.dark};
    }
  }

  @media screen and (min-width: 1280px) {
    margin: ${props => props.theme.spacing.s}rem 0;
    padding: 0;
  }
`;

const SliderVariant = styled(Slider)`
  height: 88px;
`;

const CardVariantLeft = styled.div`
  flex: 1;

  @media screen and (max-width: 480px) {
    div[role='img'] {
      height: 88px;
    }
  }
`;
const CardVariantRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 2;
  padding: 0 ${props => props.theme.spacing.xs}rem;
  position: relative;

  @media screen and (min-width: 1280px) {
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

const LikeButton = styled(Button)<{ isLiked: boolean }>`
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 30px;
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
  height: 5.5rem;
  width: 5.5rem;
`;

const CategoryBadge = styled(Typography)<{ element: 'span' }>`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onSecondary};
  text-transform: capitalize;
  padding: ${props => props.theme.spacing.xs}rem;
  position: absolute;
  display: block;
  font-size: 14px;
  top: 24px;
  left: 24px;
  border-radius: 5px;
  z-index: 900;
`;

const ServiceLabel = styled(Typography)`
  padding: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.onBackground};
  font-size: 14px;
  margin-right: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  border-radius: 5px;
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
  LikeButton,
  LikeButtonWrapper,
  MiniImage,
  CategoryBadge,
  ServiceLabel,
};
