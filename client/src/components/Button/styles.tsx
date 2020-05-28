import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  border-radius: 3px;
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
      padding: ${props => props.theme.spacing.xs}rem 32px;
      ${createFontStyles(props.theme.fonts.b2)};

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        width: auto;
        padding: ${props => props.theme.spacing.xs}rem 20px;
      }
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      padding: ${props => props.theme.spacing.xs}rem 20px;
      ${createFontStyles(props.theme.fonts.b2)};
    `};
  ${props =>
    props.size === 'large' &&
    css`
      padding: ${props => props.theme.spacing.xs}rem 75px;
      ${createFontStyles(props.theme.fonts.h3)};
    `};
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.onPrimary};
      border: 1px solid transparent;
      transition: background-color 0.3s;
      &:hover,
      &:active,
      &:focus {
        background-color: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.onBackground};
      }
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
    `};
  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props => props.theme.colors.background};
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      svg {
        fill: ${props => props.theme.colors.primary};
      }
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
      }
    `};
  ${props =>
    props.variant === 'tertiary' &&
    css`
      background-color: ${props => props.theme.colors.onBackground};
      color: ${props => props.theme.colors.background};
      border: none;
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
      }
      svg {
        fill: ${props => props.theme.colors.background};
      }
    `};
`;
