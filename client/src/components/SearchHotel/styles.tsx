import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import createMediaQuery from '../../util/createMediaQuery';
import { FlexKid } from '../Layout';

export const Sections = styled(FlexKid)`
  margin-right: ${props => props.theme.spacing.xs}rem;

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.m}rem;
    `,
  )}
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

  ${props => createFontStyles(props.theme.fonts.h6)}

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.xs}rem;
    `,
  )}

  &:hover,
  &:active {
    color: ${props => props.theme.colors.primary};
  }
`;

export const AlphabeticalResults = styled.div`
  display: flex;
  background: ${props => props.theme.colors.background};
`;
