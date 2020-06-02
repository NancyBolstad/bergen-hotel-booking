import styled, { css } from 'styled-components';
import { Swipeable } from 'react-swipeable';
import { BackgroundImage } from '../Image/BackgroundImage';

export const Slide = styled(BackgroundImage)<{ large?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 180px;

  @media (min-width: ${props => props.theme.mediaQueries.medium}px) {
    min-height: ${props => (props.large ? '580px' : '280px')};
  }
`;

export const SliderNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.m}rem;
`;

export const Dots = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  bottom: ${props => props.theme.spacing.xs}rem;
`;

export const Dot = styled.li<{ active?: boolean }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.white};
  opacity: 0.8;

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing.xs}rem;
  }

  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.colors.primary};
    `}
`;

export const PrevNextButton = styled.button<{ next?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.white};
  opacity: 0.8;
  box-shadow: none;
  cursor: pointer;
  outline: none;

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing.xs}rem;
  }

  svg {
    width: 28px;
    height: 28px;
    transform: rotate(90deg);
    path {
      fill: ${props => props.theme.colors.dark};
    }
  }

  ${props =>
    props.next &&
    css`
      svg {
        transform: rotate(270deg);
      }
    `}
`;

export const SliderButtonWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

export const StyledSwipeableSliderWrapper = styled(Swipeable)`
  height: 100%;
`;
