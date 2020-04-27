import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.s}rem;
`;

export const SelectFieldWrapper = styled.div`
  position: relative;
  transition: opacity 0.1s ease-in-out;
  display: flex;
`;

export const Label = styled.label`
  ${props => createFontStyles(props.theme.fonts.b2)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  display: block;
  color: ${props => props.theme.colors.primary};
`;

export const StyledSelect = styled.select`
  height: 40px;
  width: 9.8rem;
  margin-left: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  background-size: 20px 20px;
  ${props => createFontStyles(props.theme.fonts.b1)};
  border: 1px solid ${props => props.theme.colors.primaryVariant};
  padding: 0 16px;
  margin-top: ${props => props.theme.spacing.xs}rem;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;

  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
`;

export const Arrow = styled.div`
  position: absolute;
  pointer-events: none;
  right: 0.7rem;
  top: 1.1875rem;

  svg {
    width: 10px;
    height: 10px;
    fill: ${props => props.theme.colors.primary};
  }
`;
