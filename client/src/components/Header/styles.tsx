import styled from 'styled-components';
import { Link } from 'react-router-dom';
import createFontStyles from '../../util/createFontStyles';

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
  margin: 0 auto;
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
    svg {
      fill: ${props => props.theme.colors.primary};
    }
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

export const LikeButton = styled(HeaderNavLink)`
  position: relative;

  svg {
    fill: ${props => props.theme.colors.onBackground};
  }

  span {
    font-size: 12px;
    background-color: ${props => props.theme.colors.dark};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    left: 16px;
    color: ${props => props.theme.colors.white};
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    span {
      font-size: 16px;
      left: 32px;
      top: 2px;
      width: 24px;
      height: 24px;
      background-color: ${props => props.theme.colors.surface};
      color: ${props => props.theme.colors.dark};
    }
  }
`;

export const SiteLogo = styled(HeaderNavLink)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Lobster', cursive;
  font-weight: bold;
  font-size: 1.5rem;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    font-size: 2.35rem !important;
  }

  &:hover {
    opacity: 0.8;
  }
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
  display: inline-flex;
  align-content: flex-start;
  justify-content: center;
`;

export const MobileMenuIcon = styled.a`
  padding: 0;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.onBackground};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.primary};
    }
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
    margin: ${props => props.theme.spacing.l}rem auto;
    color: ${props => props.theme.colors.onBackground};
  }
`;

export const MobileIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.surface};

  a {
    margin: ${props => props.theme.spacing.s}rem auto;
  }
`;
