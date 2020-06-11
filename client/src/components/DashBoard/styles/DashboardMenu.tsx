import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardMenuWrapper = styled.aside`
  width: 100%;
`;

export const DashboardNav = styled.nav`
  width: 100%;
`;

export const DashboardNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  justify-content: flex-start;

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    margin: 0;
    padding: 0;
    list-style: none;
    display: block;
    width: 100%;
    margin: 0;
  }
`;

export const DashboardNavListItem = styled.li`
  width: 100%;
  margin: calc(${props => props.theme.spacing.xs}rem / 2);

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    width: 100%;
    margin: 0;
  }

  &:not(last-child) {
    margin-bottom: ${props => props.theme.spacing.xs}rem;
  }
`;

export const DashboardNavLink = styled(Link)<{ isActive?: boolean }>`
  display: flex;
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => `${props.theme.spacing.xs / 2}rem ${props.theme.spacing.xs}rem`};
  color: ${props => props.theme.colors.dark};
  box-shadow: 0px 3px 6px #00000029;
  align-items: center;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.surface};
  transition: background-color 0.15s ease-in-out;
  text-decoration: none;
  flex-direction: row;
  justify-content: flex-start;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    padding: ${props => `${props.theme.spacing.xs / 2}rem ${props.theme.spacing.s}rem`};
  }

  &:hover {
    opacity: 0.8;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${props => props.theme.colors.background};
      border-color: ${props => props.theme.colors.white};
    `};
`;

export const DashboardMenuIcon = styled.div<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 50%;
  margin-right: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;

  ${props =>
    props.isActive &&
    css`
      background-color: ${props => props.theme.colors.primary};
    `};

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.onBackground};

    ${props =>
      props.isActive &&
      css`
        fill: ${props => props.theme.colors.background};
      `};
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    margin-right: ${props => props.theme.spacing.xs}rem;
    margin-bottom: 0;
  }
`;
