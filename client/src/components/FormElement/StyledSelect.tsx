import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import createMediaQuery from '../../util/createMediaQuery';

export const SelectLabel = styled.label`
  ${props => createFontStyles(props.theme.fonts.b1)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  display: block;
  color: ${props => props.theme.colors.onBackground};
  position: relative;
`;

export const StyledSelectInput = styled.select`
  height: 40px;
  width: 12.8rem;
  margin-right: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
  background-size: 20px 20px;
  ${props => createFontStyles(props.theme.fonts.b1)};
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
  flex-direction: column;
  margin-top: ${props => props.theme.spacing.xs}rem;

  ${createMediaQuery(
    'medium',
    css`
      flex-direction: row;
      align-items: center;
      margin-top: 0;
    `,
  )}
`;
