import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  border: 2px solid transparent;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-left: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.size === 'small' &&
    css`
      width: 100%;
      padding: 0 32px;
      ${createFontStyles(props.theme.fonts.b2)};

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        padding: 0 20px;
      }
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      padding: 10px 20px;
      ${createFontStyles(props.theme.fonts.b2)};
    `};
  ${props =>
    props.size === 'large' &&
    css`
      padding: 10px 75px;
      border-radius: 35px;
      ${createFontStyles(props.theme.fonts.h3)};
    `};
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.onSecondary};
      &:hover,
      &:active,
      &:focus {
        opacity: 0.9;
      }
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
    `};
  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props => props.theme.colors.background};
      border-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.onBackground};
      svg {
        fill: ${props => props.theme.colors.secondary};
      }
      &:hover,
      &:active,
      &:focus {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.onSecondary};
        svg {
          fill: ${props => props.theme.colors.onSecondary};
        }
      }
    `};
  ${props =>
    props.variant === 'tertiary' &&
    css`
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.onBackground};
      border: none;
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
      }
      svg {
        fill: ${props => props.theme.colors.onBackground};
      }
    `};
  ${props =>
    props.variant === 'quaternary' &&
    css`
      background-color: transparent;
      color: ${props => props.theme.colors.onPrimary};
      border-color: ${props => props.theme.colors.onPrimary};
      &:hover,
      &:active,
      &:focus {
        background-color: ${props => props.theme.colors.onPrimary};
        color: ${props => props.theme.colors.onBackground};
        svg {
          fill: ${props => props.theme.colors.onBackground};
        }
      }
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
    `};
`;
