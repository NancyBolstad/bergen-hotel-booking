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
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.xs}rem;

  &::placeholder {
    color: ${props => setColorOpacity(props.theme.colors.onBackground, '0.4')};
    ${props => createFontStyles(props.theme.fonts.h5)};
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.onBackground};
    outline: none;
  }
`;
