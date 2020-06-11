import styled, { css } from 'styled-components';
import { FlexKid } from '../Layout';

export const Sections = styled(FlexKid)`
  margin-right: ${props => props.theme.spacing.xs}rem;

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    margin-right: ${props => props.theme.spacing.m}rem;
  }
`;

export const SectionTitle = styled.div`
  border-bottom: 2px solid ${props => props.theme.colors.onSurface};
  background: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.m}rem;
`;

export const LettersWrapper = styled.div``;

export const Letters = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  position: sticky;
  top: 6.8625rem;
  margin-top: ${props => props.theme.spacing.m}rem;
`;

export const Letter = styled.a`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: inherit;
  text-decoration: none;
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

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    margin-right: ${props => props.theme.spacing.xs}rem;
  }

  &:hover,
  &:active {
    color: ${props => props.theme.colors.primary};
  }
`;

export const AlphabeticalResults = styled.div`
  display: flex;
  background: ${props => props.theme.colors.background};
`;
