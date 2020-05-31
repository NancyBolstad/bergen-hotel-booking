import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import createMediaQuery from '../../util/createMediaQuery';

export const Section = styled.section`
  background: ${props => props.theme.colors.background};
`;

export const Sections = styled.div`
  flex: 1;
  margin-right: ${props => props.theme.spacing.xs}rem;

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.m}rem;
    `,
  )}
`;

export const SectionTitle = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 2px solid ${props => props.theme.colors.onSurface};
  background: ${props => props.theme.colors.background};
  z-index: 900;
  margin-bottom: ${props => props.theme.spacing.m}rem;
`;

export const LettersWrapper = styled.div``;

export const Letters = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  position: sticky;
  top: 6.8625rem;
  margin-top: ${props => props.theme.spacing.m}rem;
`;

export const Letter = styled.a`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: inherit;
  text-decoration: none;

  ${props => createFontStyles(props.theme.fonts.h6)}

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.xs}rem;
    `,
  )}

  &:hover,
  &:active {
    color: ${props => props.theme.colors.primary};
  }
`;

export const Results = styled.div`
  display: flex;
  background: ${props => props.theme.colors.background};
`;

export const Filter = styled.div`
  background: ${props => props.theme.colors.background};
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
  ${props => createFontStyles(props.theme.fonts.b2)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  display: block;
  color: ${props => props.theme.colors.primary};
  position: relative;
`;

export const Select = styled.select`
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

export const StyledInput = styled.input`
  height: 40px;
  width: 11.8rem;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.onBackground};
  padding: 0 16px;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  ${props => createFontStyles(props.theme.fonts.b1)};
  color: ${props => props.theme.colors.onBackground};

  &::placeholder {
    color: ${props => props.theme.colors.onSurface};
  }
  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:placeholder-shown {
    border: 1px solid ${props => props.theme.colors.onBackground};
  }
`;
