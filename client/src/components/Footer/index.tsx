import * as React from 'react';
import Typography from '../Typography';
import { FooterWrapper, FooterContent } from './styles';

export interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <a href="https://rawg.io/" title="Go to RAWG Video Games ">
          <Typography
            variant="b2"
            element="h6"
            content="Developed with RAWG Video Games Database API"
            isPrimaryColor
          />
        </a>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
