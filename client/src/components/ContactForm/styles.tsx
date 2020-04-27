import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Form = styled.form`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.s}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  button {
    margin-top: ${props => props.theme.spacing.s}rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Label = styled.label`
  ${props => createFontStyles(props.theme.fonts.b2)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${props => props.theme.spacing.s}rem 0;
  width: 100%;
`;

export const StyledLabelText = styled.span`
  color: ${props => props.theme.colors.primary};
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  ${props => createFontStyles(props.theme.fonts.b2)};

  span {
    color: ${props => props.theme.colors.secondary};
    margin-left: 0.25rem;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primaryVariant};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 0 20px;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  ${props => createFontStyles(props.theme.fonts.b1)};
  color: ${props => props.theme.colors.primaryVariant};

  &::placeholder {
    color: ${props => props.theme.colors.primaryVariant};
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
    border: 1px solid ${props => props.theme.colors.primaryVariant};
  }
`;

export const StyledTextArea = styled.textarea`
  height: 50px;
  height: 180px;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primaryVariant};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 10px 20px;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  ${props => createFontStyles(props.theme.fonts.b1)};
  color: ${props => props.theme.colors.primaryVariant};

  &::placeholder {
    color: ${props => props.theme.colors.primaryVariant};
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
    border: 1px solid ${props => props.theme.colors.primaryVariant};
  }
`;

export const ErrorMessage = styled.span`
  ${props => createFontStyles(props.theme.fonts.b3)};
  text-transform: capitalize;
  text-align: left;
  color: ${props => props.theme.colors.error};
`;
