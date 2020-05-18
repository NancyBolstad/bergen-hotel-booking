import styled, { css } from 'styled-components';
import createMediaQuery from '../../util/createMediaQuery';
import setColorOpacity from '../../util/setColorOpacity';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing.xs}rem;
  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: ${props => props.theme.spacing.xs}rem ${props => props.theme.spacing.m}rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  margin: ${props => props.theme.spacing.l}rem auto 0 auto;
`;

export const FooterLink = styled.a`
  transition: opacity 0.12s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${setColorOpacity('#ffffff', '0.7')};
    margin-right: ${props => props.theme.spacing.s}rem;

    &:hover {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`;
