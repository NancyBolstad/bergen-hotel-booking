import * as React from 'react';
import { HeaderNavLinkList, HeaderNavLink } from './styles';

interface Props {
  navLinks: string[];
}

const MainNavMenu: React.FunctionComponent<Props> = ({ navLinks }) => {
  return (
    <HeaderNavLinkList>
      <li>
        <HeaderNavLink
          href="/accommodations?name=&category=&service="
          title="Go to accommodations page"
          aria-label="Go to accommodations page"
        >
          Accommodations
        </HeaderNavLink>
      </li>
      {(navLinks || []).map((link, index) => (
        <li key={`navigationLink-${index}`}>
          <HeaderNavLink
            href={`/${link}`}
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
