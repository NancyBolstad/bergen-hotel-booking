import * as React from 'react';
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
} from './styles';
import { APP_NAME } from '../../util/constants';
import { ContrastContext } from '../../context/Contrast';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross, search, heart, sun, moon } from '../../util/icons';
import useIsMobile from '../../hooks/useIsMobile';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const { favorites } = React.useContext(Context);
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <HeaderWrapper>
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
            <HeaderNavLink to="/#">{search}</HeaderNavLink>
            {!isMobile && (
              <>
                <LikeButton to="/favorites">
                  {heart}
                  <span>{favorites.length}</span>
                </LikeButton>
                <ThemeToggleButton onClick={() => toggleContrast()}>
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
      </HeaderWrapper>
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
              setIsMobileMenuOpen(false);
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
    </>
  );
};

export default Header;
