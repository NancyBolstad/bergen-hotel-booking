import styled, { css } from 'styled-components';
import { Section } from '../../components/Layout';

export const DashboardBackgroundWrapper = styled(Section)`
  background-color: ${props => props.theme.colors.backgroundVariant};
`;

export const DashboardSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    margin: calc(-${props => props.theme.spacing.s}rem / 2);
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    flex-wrap: nowrap;
  }
`;

export const Content = styled.div<{ aside?: boolean }>`
  margin: ${props => props.theme.spacing.s}rem 0;
  height: 100%;

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    padding: ${props => props.theme.spacing.xs}rem;
  }

  ${props =>
    props.aside &&
    css`
      width: 100%;

      @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
        width: auto;
      }
    `};

  ${props =>
    !props.aside &&
    css`
      width: 100%;

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        flex: 1;
        max-width: 980px;
      }
    `};
`;
