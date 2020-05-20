import * as React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import setColorOpacity from '../../util/setColorOpacity';

export const StyledTextArea = styled.textarea<
  Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
>`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.onBackground};
  color: ${props => props.theme.colors.onBackground};
  height: 12.5rem;
  width: 100%;
  padding: ${props => props.theme.spacing.xs}rem;
  ${props => createFontStyles(props.theme.fonts.b3)};

  &::placeholder {
    color: ${props => setColorOpacity(props.theme.colors.onBackground, '0.4')};
    ${props => createFontStyles(props.theme.fonts.h5)};
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;
