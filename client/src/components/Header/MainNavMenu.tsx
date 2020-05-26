import * as React from 'react';
import { HeaderNavLinkList, HeaderNavLink } from './styles';

interface Props {
  navLinks: string[];
}

const MainNavMenu: React.FunctionComponent<Props> = ({ navLinks }) => {
  return (
    <HeaderNavLinkList>
      {(navLinks || []).map((link, index) => (
        <li>
          <HeaderNavLink
            to={`/${link}`}
            title={`Go to ${link} page`}
            aria-label={`Go to ${link} page`}
          >
            {link}
          </HeaderNavLink>
        </li>
      ))}
    </HeaderNavLinkList>
  );
};

export default MainNavMenu;
