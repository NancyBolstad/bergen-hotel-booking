import styled, { css } from 'styled-components';
import createMediaQuery from '../../util/createMediaQuery';

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  ${createMediaQuery(
    'medium',
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
  )}
`;

export const InputFieldWrapper = styled.div`
  transition: opacity 0.1s ease-in-out;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  display: block;
  color: ${props => props.theme.colors.primary};
  position: relative;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.weight}rem;
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
`;

export const Select = styled.select`
  height: 40px;
  width: 12.8rem;
  margin-right: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
  background-size: 20px 20px;
  border: 1px solid ${props => props.theme.colors.onSurface};
  padding: 0 16px;
  margin-top: ${props => props.theme.spacing.xs}rem;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  text-transform: capitalize;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.b1.family};
  font-weight: ${props => props.theme.fonts.b1.weight};
  font-size: ${props => props.theme.fonts.b1.weight}rem;
  ${props =>
    props.theme.fonts.b1.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b1.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b1.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b1.mediaQueries[0].query}px) {
        ${props.theme.fonts.b1.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b1.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b1.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b1.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b1.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b1.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b1.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b1.mediaQueries[0].lineHeight};
          `};
      }
    `}

  &:hover,
  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.onBackground};
  }
`;

export const Arrow = styled.div`
  position: absolute;
  pointer-events: none;
  right: 1rem;
  top: 1rem;

  svg {
    width: 10px;
    height: 10px;
    fill: ${props => props.theme.colors.onBackground};
  }

  ${createMediaQuery(
    'medium',
    css`
      right: 1rem;
    `,
  )}
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
