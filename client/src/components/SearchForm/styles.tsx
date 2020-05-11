import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;

export const SearchInputField = styled.input`
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  white-space: nowrap;
  padding: 0.55rem 0.75rem;
  font-size: 1rem;
  text-decoration: none;
  line-height: normal;
  height: 3rem;
  cursor: pointer;
  flex-grow: 2;

  ::placeholder {
    color: ${props => props.theme.colors.onSurface};
  }

  &:focus {
    background: #ffffff;
    color: black;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
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

export const SearchResultsWrapper = styled.ul`
  max-height: 500px;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xs}px;
  margin: 2px 0 0;
  list-style: none;
  box-shadow: inset 0 -14px 10px -10px #00000029;

  li {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.spacing.s}px;
    }
  }
`;

export const Result = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: ${props => props.theme.spacing.s}px;
  }
`;

export const ResultName = styled.span`
  margin: 0;
  ${props => createFontStyles(props.theme.fonts.h4)}
`;

export const ResultBody = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const ResultInfo = styled.div`
  flex: 1;

  span {
    margin: 4px 0 0;
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`;
