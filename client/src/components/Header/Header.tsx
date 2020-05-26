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
import { APP_NAME } from '../../util/constants';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross, search, heart, sun, moon } from '../../util/icons';
import useIsMobile from '../../hooks/useIsMobile';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  let history = useHistory();
  const location = useLocation();
  const { favorites } = React.useContext(Context);
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const [searching, setSearching] = React.useState<boolean>(false);

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
  }, [location]);

  return (
    <HeaderWrapper>
      <HeaderTop>
        <HeaderNavLink to="/login">For Admins</HeaderNavLink>
      </HeaderTop>
      <HeaderNav>
        <HeaderMenuLeft>
          <SiteLogo to="/">{APP_NAME}</SiteLogo>
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
      {isMobile && isMobileMenuOpen && <MobileMenu />}
      {searching && <SearchBar toggler={setSearching} />}
    </HeaderWrapper>
  );
};

export default Header;
