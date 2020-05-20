import * as React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import setColorOpacity from '../../util/setColorOpacity';

export const StyledInput = styled.input<Partial<React.InputHTMLAttributes<HTMLInputElement>>>`
  border: 1px solid ${props => props.theme.colors.onBackground};
  color: ${props => props.theme.colors.onBackground};
  height: 2.5rem;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.xs}rem;
  ${props => createFontStyles(props.theme.fonts.b3)};

  &::placeholder {
    color: ${props => setColorOpacity(props.theme.colors.onBackground, '0.6')};
    ${props => createFontStyles(props.theme.fonts.h5)};
    font-size: 1rem;
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.onBackground};
    outline: none;
  }
`;
