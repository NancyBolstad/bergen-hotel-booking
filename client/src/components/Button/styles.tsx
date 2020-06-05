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
  border-radius: 4px;
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

    ${props =>
      props.icon &&
      css`
        margin-left: 0rem;
      `}
  }
  ${props =>
    props.size === 'small' &&
    css`
      padding: ${props => props.theme.spacing.xs}rem 32px;
      ${createFontStyles(props.theme.fonts.b2)};

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
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
      padding: ${props => props.theme.spacing.xs}rem 48px;
      ${createFontStyles(props.theme.fonts.h3)};
    `};
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.onPrimary};
      border: 1px solid transparent;
      transition: background-color 0.3s;
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
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

  ${props =>
    props.variant === 'secondaryVariant' &&
    css`
      background-color: transparent;
      border-bottom-color: ${props => props.theme.colors.primary};
      padding: 0;
      justify-content: flex-start;
      width: fit-content;
      font-size: 14px;
      color: ${props => props.theme.colors.primary};
      svg {
        fill: ${props => props.theme.colors.primary};
        width: 18px;
        height: 18px;
      }
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
      }
    `};

  ${props =>
    props.variant === 'tertiaryVariant' &&
    css`
      background-color: transparent;
      color: ${props => props.theme.colors.onBackground};
      border: none;
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
        svg {
          fill: ${props => props.theme.colors.primary};
        }
      }
      svg {
        fill: ${props => props.theme.colors.onBackground};
      }
    `}
`;
