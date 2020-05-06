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
} from './styles';
import { APP_NAME } from '../../util/constants';
import { ContrastContext } from '../../context/Contrast';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross, search, heart, sun, moon } from '../../util/icons';
import useIsDesktop from '../../hooks/useIsDesktop';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const { favorites } = React.useContext(Context);
  const isDesktop = useIsDesktop();
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
                if (!isDesktop) {
                  e.preventDefault();
                  window.location.assign('/');
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {APP_NAME}
            </SiteLogo>
            {isDesktop && (
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
            <HeaderNavLink to="/search">{search}</HeaderNavLink>
            <HeaderNavLink to="/favorites">
              {heart} ({favorites.length})
            </HeaderNavLink>
            <HeaderNavLink to="/#" onClick={() => toggleContrast()}>
              {theme === 'default' ? sun : moon}
            </HeaderNavLink>
            {!isDesktop && (
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
      {!isDesktop && isMobileMenuOpen && (
        <MobileMenuWrapper>
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
