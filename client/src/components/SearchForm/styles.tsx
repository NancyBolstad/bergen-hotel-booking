import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Wrapper = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  ${props =>
    props.isMobile === false &&
    css`
      position: absolute;
    `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 100vw;
`;

export const SearchInputField = styled.input`
  background: ${props => props.theme.colors.background};
  border: 2px solid white;
  white-space: nowrap;
  padding: 0.55rem 0.75rem;
  font-size: 1rem;
  text-decoration: none;
  line-height: normal;
  height: 3rem;
  cursor: pointer;
  flex-grow: 2;
  max-width: 60vw;

  ::placeholder {
    color: ${props => props.theme.colors.onSurface};
  }

  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onBackground};
  }

  @media screen and (min-width: 1080px) {
    height: 3.5rem;
  }
`;

export const SearchSubmitButton = styled.button<{ isMobile?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border: none;
  cursor: pointer;
  flex-grow: 1;
  height: 3rem;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${props => props.theme.colors.onPrimary};
    margin-left: ${props => (props.isMobile ? 0 : 0.5)}rem;
  }

  @media screen and (min-width: 1080px) {
    flex-grow: 1;
    width: 3rem;
    height: 3.5rem;
  }

  ${props => createFontStyles(props.theme.fonts.b2)}

  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
    color: ${props => props.theme.colors.white};
    svg {
      fill: ${props => props.theme.colors.white};
    }
  }
`;

export const SearchResultsWrapper = styled.div<{ isMobile?: boolean }>`
  height: 500px;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.white};
  box-shadow: 0 3px 4px 0 rgba(71, 68, 69, 0.14), 0 3px 3px -2px rgba(71, 68, 69, 0.2),
    0 1px 8px 0 rgba(71, 68, 69, 0.12);
  max-width: 650px;
  overflow-y: auto;
  list-style: none;
  width: 100%;
  border-radius: 0 0 8px 8px;
  padding: ${props => (props.isMobile ? props.theme.spacing.s : props.theme.spacing.m)}rem;

  ${props =>
    props.isMobile &&
    css`
      position: absolute;
      top: 3rem;
      left: 0;
      right: 0;
      z-index: 2;
    `}
`;
