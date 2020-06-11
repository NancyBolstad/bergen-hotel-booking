import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { user, messages, hotel, enquiry, logout } from '../../../util/icons';
import slugMatch from '../../../util/slugMatch';
import Typography from '../../../components/Typography/Typography';
import { UserContext } from '../../../context/UserContext';

const Wrapper = styled.aside`
  width: 100%;
`;

const Nav = styled.nav`
  width: 100%;
`;

const List = styled.ul`
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

const ListItem = styled.li<{ isActive?: boolean }>`
  width: 100%;
  margin: calc(${props => props.theme.spacing.xs}rem / 2);

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    width: 100%;
    margin: 0;
  }

  &:not(last-child) {
    margin-bottom: ${props => props.theme.spacing.xs}rem;
  }

  a {
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

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }

    ${props =>
      props.isActive &&
      css`
        background-color: ${props => props.theme.colors.background};
        border-color: ${props => props.theme.colors.white};
      `};
  }
`;

const MenuIcon = styled.div<{ isActive?: boolean }>`
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

interface Props {}

const MyPageMenu: React.FC<Props> = () => {
  const location = useLocation();
  const { logOut } = React.useContext(UserContext);
  const isMyProfileActive = slugMatch('my-account', location.pathname);
  const isEstablishmentsActive = slugMatch('establishments', location.pathname);
  const isEnquiriesActive = slugMatch('enquiries', location.pathname);
  const isCustomerServiceActive = slugMatch('messages', location.pathname);

  return (
    <Wrapper>
      <Nav>
        <List>
          <ListItem isActive={isMyProfileActive}>
            <Link to="/dashboard/my-account" aria-label="Go to my account">
              <MenuIcon isActive={isMyProfileActive}>{user}</MenuIcon>
              <Typography variant="b3" element="span" content="My Account" />
            </Link>
          </ListItem>
          <ListItem isActive={isEstablishmentsActive}>
            <Link to="/dashboard/establishments" aria-label="Go to establishments">
              <MenuIcon isActive={isEstablishmentsActive}>{hotel}</MenuIcon>
              <Typography variant="b3" element="span" content="Establishments" />
            </Link>
          </ListItem>
          <ListItem isActive={isEnquiriesActive}>
            <Link to="/dashboard/enquiries" aria-label="Go to enquiries">
              <MenuIcon isActive={isEnquiriesActive}>{enquiry}</MenuIcon>
              <Typography variant="b3" element="span" content="Enquiries" />
            </Link>
          </ListItem>
          <ListItem isActive={isCustomerServiceActive}>
            <Link to="/dashboard/messages" aria-label="Go to messages">
              <MenuIcon isActive={isCustomerServiceActive}>{messages}</MenuIcon>
              <Typography variant="b3" element="span" content="Messages" />
            </Link>
          </ListItem>
          <ListItem>
            <a
              href="/log-out"
              onClick={e => {
                e.preventDefault();
                logOut();
              }}
              aria-label="Log out"
            >
              <MenuIcon>{logout}</MenuIcon>
              <Typography variant="b3" element="span" content="Log out" />
            </a>
          </ListItem>
        </List>
      </Nav>
    </Wrapper>
  );
};

export default MyPageMenu;
