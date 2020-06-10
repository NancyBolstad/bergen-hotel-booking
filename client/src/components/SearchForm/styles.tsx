import styled, { css } from 'styled-components';

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
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;

  ::placeholder {
    color: ${props => props.theme.colors.onSurface};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primaryVariant};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onBackground};
  }

  @media screen and (min-width: 1080px) {
    height: 3.5rem;
    border-radius: 4px 0px 0px 4px;
  }
`;

export const SearchSubmitButton = styled.button<{ isMobile?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border: 2px solid transparent;
  cursor: pointer;
  flex-grow: 1;
  height: 3rem;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.size}rem;
  ${props =>
    props.theme.fonts.b2.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b2.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b2.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b2.mediaQueries[0].query}px) {
        ${props.theme.fonts.b2.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b2.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b2.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b2.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b2.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b2.mediaQueries[0].lineHeight};
          `};
      }
    `}

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
    border-radius: 0px 4px 4px 0px;
  }

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
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
