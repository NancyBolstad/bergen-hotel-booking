import * as React from 'react';
import { HeaderNavLink, MobileMenuWrapper, LikeButton, MobileIcons } from './styles';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { heart, sun, moon } from '../../util/icons';

const MobileMenu: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const { favorites } = React.useContext(Context);

  return (
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
      <HeaderNavLink to="/accommodations">Accommodations</HeaderNavLink>
      <HeaderNavLink to="/blog">Blog</HeaderNavLink>
      <HeaderNavLink to="/about">About</HeaderNavLink>
      <HeaderNavLink to="/contact">Contact</HeaderNavLink>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
