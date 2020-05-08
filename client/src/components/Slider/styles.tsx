import styled, { css } from 'styled-components';
import { BackgroundImage } from '../Image/BackgroundImage';

export const Slide = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;
  position: relative;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    height: 580px;
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

export const PrevNextButton = styled.a<{ next?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.white};
  opacity: 0.8;
  box-shadow: none;
  cursor: pointer;

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
