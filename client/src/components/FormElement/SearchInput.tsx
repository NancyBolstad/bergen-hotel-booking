import * as React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { search } from '../../util/icons';

const StyledInput = styled.input<Partial<IProps>>`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.onBackground};
  height: 2.5rem;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.xs}rem;
  ${props => createFontStyles(props.theme.fonts.b3)};
  color: ${props => props.theme.colors.onBackground};

  ::placeholder {
    color: ${props => props.theme.colors.onSurface};
    ${props => createFontStyles(props.theme.fonts.h5)};
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

const Icon = styled.div`
  width: 20px;
  fill: ${props => props.theme.colors.onSurface};
`;

const SearchIconButton = styled.button`
  width: 0;
  right: 2rem;
  outline: none;
  border: transparent;
  background: none;
  position: absolute;
  top: 20%;
  width: 1rem;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export default function SearchInput({ type, ...htmlProps }: IProps) {
  return (
    <SearchInputWrapper>
      <StyledInput type={type} {...htmlProps} />
      <SearchIconButton type="submit">
        <Icon>{search}</Icon>
      </SearchIconButton>
    </SearchInputWrapper>
  );
}
