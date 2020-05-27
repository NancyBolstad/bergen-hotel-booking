import * as React from 'react';
import { HeaderNavLink, MobileMenuWrapper, LikeButton, MobileIcons } from './styles';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { heart, sun, moon } from '../../util/icons';
import useOutsideClick from '../../hooks/useOutsideClick';

interface Props {
  navLinks: string[];
  toggler: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FunctionComponent<Props> = ({ navLinks, toggler }) => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const { favorites } = React.useContext(Context);
  const toggleArea = React.useRef(null);

  useOutsideClick(toggleArea, () => {
    toggler(false);
  });

  return (
    <MobileMenuWrapper ref={toggleArea}>
      <MobileIcons>
        <LikeButton
          href="/favorites"
          title="Go to favorites page"
          aria-label="Go to favorites page"
        >
          {heart}
          <span>{favorites.length}</span>
        </LikeButton>
        <HeaderNavLink
          href="/#"
          role="button"
          onClick={() => toggleContrast()}
          aria-label="Toggle mode"
        >
          {theme === 'default' ? sun : moon}
        </HeaderNavLink>
      </MobileIcons>
      <HeaderNavLink
        href="/accommodations?name=&category=&service="
        title="Go to accommodations page"
        aria-label="Go to accommodations page"
      >
        Accommodations
      </HeaderNavLink>
      {(navLinks || []).map((link, index) => (
        <HeaderNavLink
          href={`/${link}`}
          title={`Go to ${link} page`}
          aria-label={`Go to ${link} page`}
        >
          {link}
        </HeaderNavLink>
      ))}
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
