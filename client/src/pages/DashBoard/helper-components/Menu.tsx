import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { user, orders, customerService } from '../../../util/icons';
import createMediaQuery from '../../../util/createMediaQuery';
import setColorOpacity from '../../../util/setColorOpacity';
import slugMatch from '../../../util/slugMatch';
import Typography from '../../../components/Typography';
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
  flex-wrap: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  justify-content: flex-start;

  ${createMediaQuery(
    'small',
    css`
      margin: 0;
      padding: 0;
      list-style: none;
      display: block;
      width: 100%;
      margin: 0;
    `,
  )}
`;

const ListItem = styled.li<{ isActive?: boolean }>`
  width: calc(33% - ${props => props.theme.spacing.xs}rem);
  margin: calc(${props => props.theme.spacing.xs}rem / 2);

  &:not(last-child) {
    margin-bottom: ${props => props.theme.spacing.xs}rem;
  }

  a {
    display: flex;
    background-color: ${props => setColorOpacity(props.theme.colors.surface, '0.4')};
    padding: ${props => `${props.theme.spacing.xs / 2}rem ${props.theme.spacing.xs}rem`};
    color: ${props => props.theme.colors.onSurface};
    box-shadow: 0px 3px 6px #00000029;
    align-items: center;
    border-radius: 1rem;
    height: 96px;
    transition: background-color 0.15s ease-in-out;
    text-decoration: none;
    flex-direction: column;
    justify-content: center;

    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme.colors.white};
    }

    ${props =>
      props.isActive &&
      css`
        background-color: ${props => props.theme.colors.background};
      `};

    ${createMediaQuery(
      'medium',
      css`
        display: flex;
        align-items: center;
        height: 64px;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        padding: ${props => `${props.theme.spacing.xs / 2}rem ${props.theme.spacing.s}rem`};
      `,
    )}
  }

  ${createMediaQuery(
    'small',
    css`
      width: 100%;
      margin: 0;
    `,
  )}
`;

const MenuIcon = styled.div<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 50%;
  margin-bottom: ${props => props.theme.spacing.xs}rem;

  ${props =>
    props.isActive &&
    css`
      background-color: ${props => props.theme.colors.primary};
    `};

  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.colors.onSurface};

    ${props =>
      props.isActive &&
      css`
        fill: ${props => props.theme.colors.white};
      `};
  }

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.xs}rem;
      margin-bottom: 0;
    `,
  )}
`;

interface Props {}

const MyPageMenu: React.FC<Props> = () => {
  const location = useLocation();
  const { logOut } = React.useContext(UserContext);
  const isMyProfileActive = slugMatch('my-account', location.pathname, true);
  const isEstablishmentsActive = slugMatch('establishments', location.pathname, true);
  const isEnquiriesActive = slugMatch('enquiries', location.pathname, true);
  const isCustomerServiceActive = slugMatch('customer-service', location.pathname, true);

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
              <MenuIcon isActive={isEstablishmentsActive}>{customerService}</MenuIcon>
              <Typography variant="b3" element="span" content="Establishments" />
            </Link>
          </ListItem>
          <ListItem isActive={isEnquiriesActive}>
            <Link to="/dashboard/enquiries" aria-label="Go to enquiries">
              <MenuIcon isActive={isEnquiriesActive}>{orders}</MenuIcon>
              <Typography variant="b3" element="span" content="Enquiries" />
            </Link>
          </ListItem>
          <ListItem isActive={isCustomerServiceActive}>
            <Link to="/dashboard/customer-service" aria-label="Go to customer-service">
              <MenuIcon isActive={isCustomerServiceActive}>{customerService}</MenuIcon>
              <Typography variant="b3" element="span" content="Messages" />
            </Link>
          </ListItem>
          <ListItem>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                logOut();
              }}
              aria-label="Log out"
            >
              <MenuIcon>{customerService}</MenuIcon>
              <Typography variant="b3" element="span" content="Log out" />
            </a>
          </ListItem>
        </List>
      </Nav>
    </Wrapper>
  );
};

export default MyPageMenu;
