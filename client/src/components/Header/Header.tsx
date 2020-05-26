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
  LikeButton,
  ThemeToggleButton,
  HeaderTop,
} from './styles';
import { APP_NAME, MAIN_NAV_LINKS } from '../../util/constants';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross, search, heart, sun, moon } from '../../util/icons';
import useIsMobile from '../../hooks/useIsMobile';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import MainNavMenu from './MainNavMenu';

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
        <HeaderNavLink to="/login" title="Go to dashboard" aria-label="Go to dashboard">
          For Admins
        </HeaderNavLink>
      </HeaderTop>
      <HeaderNav>
        <HeaderMenuLeft>
          <SiteLogo to="/" title="Go to home page" aria-label="Go to home page">
            {APP_NAME}
          </SiteLogo>
          {!isMobile && <MainNavMenu navLinks={MAIN_NAV_LINKS} />}
        </HeaderMenuLeft>
        <HeaderMenuRight>
          <HeaderNavLink
            to="/#"
            aria-label="Search her"
            title="Search"
            onClick={event => {
              event.preventDefault();
              setSearching(true);
            }}
          >
            {search}
          </HeaderNavLink>
          {!isMobile && (
            <>
              <LikeButton
                to="/favorites"
                title="Go to favorites page"
                aria-label="Go to favorites page"
              >
                {heart}
                <span>{favorites.length}</span>
              </LikeButton>
              <ThemeToggleButton
                onClick={() => toggleContrast()}
                aria-label="Toggle mode"
                title="Toggle mode"
              >
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
              title="Open navigation menu"
              aria-label="Open navigation menu"
            >
              {isMobileMenuOpen ? cross : hamburger}
            </MobileMenuIcon>
          )}
        </HeaderMenuRight>
      </HeaderNav>
      {isMobile && isMobileMenuOpen && (
        <MobileMenu navLinks={MAIN_NAV_LINKS} toggler={setIsMobileMenuOpen} />
      )}
      {searching && <SearchBar toggler={setSearching} />}
    </HeaderWrapper>
  );
};

export default Header;
