import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuLeft,
  HeaderMenuRight,
  HeaderNavLinkList,
  HeaderNavLink,
  SiteLogo,
  MobileMenuIcon,
  MobileMenuWrapper,
  LikeButton,
  MobileIcons,
  ThemeToggleButton,
  HeaderTop,
} from './styles';
import { SearchInput, Form } from '../FormElement';
import { APP_NAME } from '../../util/constants';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross, search, heart, sun, moon } from '../../util/icons';
import useIsMobile from '../../hooks/useIsMobile';
import validateUserInput from '../../util/validateUserInput';
import SearchBar from './SearchBar';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  let history = useHistory();
  const location = useLocation();
  const { favorites } = React.useContext(Context);
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const [searching, setSearching] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setSearching(false);
    setSearchValue('');
  }, [location]);

  return (
    <HeaderWrapper>
      <HeaderTop>
        <HeaderNavLink to="/login">For Admins</HeaderNavLink>
      </HeaderTop>
      <HeaderNav>
        <HeaderMenuLeft>
          <SiteLogo
            to="/"
            onClick={e => {
              if (isMobile) {
                e.preventDefault();
                window.location.assign('/');
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {APP_NAME}
          </SiteLogo>
          {!isMobile && (
            <HeaderNavLinkList>
              <li>
                <HeaderNavLink to="/accommodations">Accommodations</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink to="/blog">Blog</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink to="/about">About</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink to="/contact">Contact</HeaderNavLink>
              </li>
            </HeaderNavLinkList>
          )}
        </HeaderMenuLeft>
        <HeaderMenuRight>
          <HeaderNavLink
            to="/search"
            aria-label="Search her"
            onClick={event => {
              event.preventDefault();
              setSearching(true);
            }}
          >
            {search}
          </HeaderNavLink>
          {!isMobile && (
            <>
              <LikeButton to="/favorites">
                {heart}
                <span>{favorites.length}</span>
              </LikeButton>
              <ThemeToggleButton onClick={() => toggleContrast()} aria-label="Toggle mode">
                {theme === 'default' ? sun : moon}
              </ThemeToggleButton>
            </>
          )}
          {isMobile && (
            <MobileMenuIcon
              onClick={e => {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? cross : hamburger}
            </MobileMenuIcon>
          )}
        </HeaderMenuRight>
      </HeaderNav>
      {isMobile && isMobileMenuOpen && (
        <MobileMenuWrapper>
          <MobileIcons>
            <LikeButton to="/favorites">
              {heart}
              <span>{favorites.length}</span>
            </LikeButton>
            <HeaderNavLink to="/#" onClick={() => toggleContrast()}>
              {theme === 'default' ? sun : moon}
            </HeaderNavLink>
          </MobileIcons>
          <HeaderNavLink
            to="/accommodations"
            onClick={e => {
              e.preventDefault();
              window.location.assign('/accommodations');
              setIsMobileMenuOpen(false);
            }}
          >
            Accommodations
          </HeaderNavLink>{' '}
          <HeaderNavLink
            to="/blog"
            onClick={e => {
              e.preventDefault();
              window.location.assign('/blog');
            }}
          >
            Blog
          </HeaderNavLink>
          <HeaderNavLink
            to="/about"
            onClick={e => {
              e.preventDefault();
              window.location.assign('/about');
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </HeaderNavLink>
          <HeaderNavLink
            to="/contact"
            onClick={e => {
              e.preventDefault();
              window.location.assign('/contact');
              setIsMobileMenuOpen(false);
            }}
          >
            Contact
          </HeaderNavLink>
        </MobileMenuWrapper>
      )}
      {searching && <SearchBar toggler={setSearching} />}
    </HeaderWrapper>
  );
};

export default Header;
