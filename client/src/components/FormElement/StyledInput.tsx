import * as React from 'react';
import styled, { css } from 'styled-components';

export const StyledInput = styled.input<Partial<React.InputHTMLAttributes<HTMLInputElement>>>`
  border: 1px solid ${props => props.theme.colors.onBackground};
  color: ${props => props.theme.colors.onBackground};
  background-color: ${props => props.theme.colors.background};
  height: 2.5rem;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.xs}rem;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.xs}rem;
  font-family: ${props => props.theme.fonts.b3.family};
  font-weight: ${props => props.theme.fonts.b3.weight};
  font-size: ${props => props.theme.fonts.b3.size}rem;
  ${props =>
    props.theme.fonts.b3.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b3.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b3.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b3.mediaQueries[0].query}px) {
        ${props.theme.fonts.b3.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b3.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b3.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b3.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b3.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b3.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b3.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b3.mediaQueries[0].lineHeight};
          `};
      }
    `}

  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.onBackground};
    outline: none;
  }

  &:disabled {
    border: none;
    outline: none;
    box-shadow: none;
    color: ${props => props.theme.colors.surface};
    background-color: ${props => props.theme.colors.background};
    margin: 0;
    margin-left: 1rem;
  }
`;
