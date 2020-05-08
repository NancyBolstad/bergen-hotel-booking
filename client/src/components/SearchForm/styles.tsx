import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const SearchFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  input[type='text'] {
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    white-space: nowrap;
    padding: 0.55rem 0.75rem;
    font-size: 1.1em;
    text-decoration: none;
    line-height: normal;
    height: 4rem;
    cursor: pointer;
    flex-grow: 2;

    ::placeholder {
      color: ${props => props.theme.colors.onSurface};
    }
  }
  button[type='submit'] {
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
      margin-left: ${props => props.theme.spacing.s}rem;
    }

    @media screen and (min-width: 375px) {
      height: 4rem;
    }

    @media screen and (min-width: 1080px) {
      flex-grow: 1;
      width: 3rem;
    }

    ${props => createFontStyles(props.theme.fonts.b2)}
  }
  input[type='text']:focus {
    background: #ffffff;
    color: black;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
  }
  button[type='submit']:focus {
    outline: none;
  }
  button[type='submit']:hover {
    opacity: 0.7;
  }
`;
