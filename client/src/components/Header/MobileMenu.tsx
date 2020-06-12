import * as React from 'react';
import { HeaderNavLink, MobileMenuWrapper, LikeButton, MobileIcons, Badge } from './styles';
import { ContrastContext } from '../../context/ContrastContext';
import { Context } from '../../context/GlobalContext';
import { heart, sun, moon } from '../../util/icons';
import useOutsideClick from '../../hooks/useOutsideClick';
import { Flex } from '../Layout';
import Typography from '../Typography/Typography';

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
          key={index}
        >
          {link}
        </HeaderNavLink>
      ))}
      <MobileIcons>
        <LikeButton
          href="/favorites"
          title="Go to favorites page"
          aria-label="Go to favorites page"
        >
          <Flex direction="column" justify="center" align="center">
            {heart}
            <Badge>{favorites.length}</Badge>
            <Typography variant="b1" element="span" content="Favorites" top={8} />
          </Flex>
        </LikeButton>
        <HeaderNavLink
          href="/#"
          role="button"
          onClick={event => {
            event.preventDefault();
            toggleContrast();
          }}
          aria-label="Toggle mode"
        >
          <Flex direction="column" justify="center" align="center">
            {theme === 'default' ? sun : moon}
            <Typography
              variant="b1"
              element="span"
              content={`${theme === 'default' ? 'Dark' : 'Light'} Mode`}
              top={8}
            />
          </Flex>
        </HeaderNavLink>
      </MobileIcons>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
