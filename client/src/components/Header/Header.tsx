import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuLeft,
  HeaderMenuRight,
  HeaderNavLink,
  SiteLogo,
  MobileMenuIcon,
  LikeButton,
  ThemeToggleButton,
  HeaderTop,
  Badge,
} from './styles';
import { APP_NAME, MAIN_NAV_LINKS } from '../../util/constants';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross, search, heart, sun, moon } from '../../util/icons';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import MainNavMenu from './MainNavMenu';
import { Flex } from '../Layout/';
import Typography from '../Typography/Typography';
import useResponsiveWindowSize from '../../hooks/useResponsiveWindowSize';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const location = useLocation();
  const { favorites } = React.useContext(Context);
  const { isMobile } = useResponsiveWindowSize();
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
        <HeaderNavLink href="/login" title="Go to dashboard" aria-label="Go to dashboard">
          For Admins
        </HeaderNavLink>
      </HeaderTop>
      <HeaderNav>
        <HeaderMenuLeft>
          <SiteLogo href="/" title="Go to home page" aria-label="Go to home page">
            {APP_NAME}
          </SiteLogo>
          {!isMobile && <MainNavMenu navLinks={MAIN_NAV_LINKS} />}
        </HeaderMenuLeft>
        <HeaderMenuRight>
          <HeaderNavLink
            href="/#"
            role="button"
            aria-label="Search her"
            title="Search"
            onClick={event => {
              event.preventDefault();
              setSearching(true);
            }}
          >
            <Flex direction="column" justify="center" align="center">
              {search}
              {!isMobile && <Typography variant="b1" element="span" content="Search" />}
            </Flex>
          </HeaderNavLink>
          {!isMobile && (
            <>
              <LikeButton
                href="/favorites"
                title="Go to favorites page"
                aria-label="Go to favorites page"
              >
                <Flex direction="column" justify="center" align="center">
                  {heart}
                  <Badge>{favorites.length}</Badge>
                  <Typography variant="b1" element="span" content="Favorites" />
                </Flex>
              </LikeButton>
              <ThemeToggleButton
                onClick={() => toggleContrast()}
                aria-label="Toggle mode"
                title="Toggle mode"
              >
                <Flex direction="column" justify="center" align="center">
                  {theme === 'default' ? moon : sun}
                  <Typography
                    variant="b1"
                    element="span"
                    content={`${theme === 'default' ? 'Dark' : 'Light'} Mode`}
                  />
                </Flex>
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
      {searching && <SearchBar toggler={setSearching} isActive={searching} />}
    </HeaderWrapper>
  );
};

export default Header;
