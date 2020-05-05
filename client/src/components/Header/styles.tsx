import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import createFontStyles from '../../util/createFontStyles';
import Button, { ButtonProps } from '../Button';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onSecondary};
  padding: ${props => props.theme.spacing.s}rem;
  position: fixed;
  z-index: 999;
  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: ${props => props.theme.spacing.s}rem ${props => props.theme.spacing.m}rem;
    height: 72px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.s}rem;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0 ${props => props.theme.spacing.l}rem;
  }
`;

export const HeaderNavLinkList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  list-style-type: none;
  -webkit-padding-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const HeaderNavLink = styled(Link)`
  color: ${props => props.theme.colors.onBackground};
  margin-right: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  ${props => createFontStyles(props.theme.fonts.h3)};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }

  svg {
    fill: ${props => props.theme.colors.onBackground};
    width: 24px;
    height: 24px;
  }
`;

export const SiteLogo = styled(HeaderNavLink)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Lobster', cursive;
  font-weight: bold;
  font-size: 2.375rem !important;
`;

export const HeaderButton = styled(HeaderNavLink)`
  border: 2px solid ${props => props.theme.colors.onSecondary};
  list-text-style: none;
  padding: 0.2rem 0.5rem;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const HeaderMenuLeft = styled.div`
  display: flex;
`;

export const HeaderMenuRight = styled.div`
  list-style-type: none;
  display: flex;
  align-content: center;
  justify-content: center;
`;

interface MobileMenuButton extends ButtonProps {
  isOpen: boolean;
}

export const MobileMenuIcon = styled.a`
  background-color: ${props => props.theme.colors.background};
  padding: 0;
  svg {
    margin: 0;
    fill: ${props => props.theme.colors.onBackground};
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.875rem;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  z-index: 999;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  ${props => createFontStyles(props.theme.fonts.h1)};

  a {
    margin-top: ${props => props.theme.spacing.xl}rem;
    color: ${props => props.theme.colors.onBackground};
  }
`;
