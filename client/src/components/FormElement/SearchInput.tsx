import * as React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { search } from '../../util/icons';

const StyledInput = styled.input<Partial<IProps>>`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.onSurface};
  height: 2.5rem;
  width: 100%;
  transition: border-color 0.1s ease-in-out;
  padding: 0 ${props => props.theme.spacing.xs}rem;
  ${props => createFontStyles(props.theme.fonts.b3)};
  color: ${props => props.theme.colors.onBackground};
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;

  ::placeholder {
    color: ${props => props.theme.colors.onSurface};
    ${props => createFontStyles(props.theme.fonts.h5)};
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.onBackground};
    outline: none;
  }
`;

const Icon = styled.div`
  width: 20px;

  svg {
    width: 24px;
    height: 24px;
  }
  fill: ${props => props.theme.colors.onSurface};
`;

const SearchIconButton = styled.button<{ customTop?: string }>`
  width: 0;
  right: 2rem;
  outline: none;
  border: transparent;
  background: none;
  position: absolute;
  top: ${props => (props.customTop ? props.customTop : '-22%')};
  width: 1rem;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  iconPosition?: string;
}

function SearchInput({ type, iconPosition, ...htmlProps }: IProps) {
  return (
    <SearchInputWrapper>
      <StyledInput type={type} {...htmlProps} aria-label="Search" />
      <SearchIconButton type="submit" aria-label="Submit search" customTop={iconPosition}>
        <Icon>{search}</Icon>
      </SearchIconButton>
    </SearchInputWrapper>
  );
}

export default SearchInput;
