import styled, { css } from 'styled-components';
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
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.size}rem;
  ${props =>
    props.theme.fonts.b2.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b2.lineHeight};
    `};
  ${props =>
    props.theme.fonts.b2.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b2.mediaQueries[0].query}px) {
        ${props.theme.fonts.b2.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b2.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b2.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b2.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b2.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b2.mediaQueries[0].lineHeight};
          `};
      }
    `}

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

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        padding: ${props => props.theme.spacing.xs}rem 20px;
      }
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      padding: ${props => props.theme.spacing.xs}rem 20px;
    `};
  ${props =>
    props.size === 'large' &&
    css`
      padding: ${props => props.theme.spacing.xs}rem 48px;
      font-weight: ${props => props.theme.fonts.h3.weight};
      font-size: ${props => props.theme.fonts.h3.size}rem;
      ${props =>
        props.theme.fonts.h3.lineHeight &&
        css`
          line-height: ${props.theme.fonts.h3.lineHeight};
        `};
      ${props =>
        props.theme.fonts.h3.mediaQueries &&
        css`
          @media (min-width: ${props.theme.fonts.h3.mediaQueries[0].query}px) {
            ${props.theme.fonts.h3.mediaQueries[0].family &&
              css`
                font-family: ${props.theme.fonts.h3.mediaQueries[0].family};
              `};
            ${props.theme.fonts.h3.mediaQueries[0].weight &&
              css`
                font-weight: ${props.theme.fonts.h3.mediaQueries[0].weight};
              `};
            ${props.theme.fonts.h3.mediaQueries[0].size &&
              css`
                font-size: ${props.theme.fonts.h3.mediaQueries[0].size}rem;
              `};
            ${props.theme.fonts.h3.mediaQueries[0].lineHeight &&
              css`
                line-height: ${props.theme.fonts.h3.mediaQueries[0].lineHeight};
              `};
          }
        `}
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
        filter: brightness(0.9);
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
