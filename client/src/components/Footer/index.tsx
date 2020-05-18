import * as React from 'react';
import Typography from '../Typography/Typography';
import { FooterWrapper, FooterLinksWrapper, FooterLink } from './styles';
import { COPY_RIGHTS } from '../../data/footer';
import { Flex } from '../Flex';
import { Facebook, Twitter, Instagram } from '../../util/icons';

export interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        <FooterLink href="">{Facebook}</FooterLink>
        <FooterLink href="">{Twitter}</FooterLink>
        <FooterLink href="">{Instagram}</FooterLink>
      </FooterLinksWrapper>
      <Flex>
        <Typography variant="h6" element="h6" content={COPY_RIGHTS} color="white" />
      </Flex>
    </FooterWrapper>
  );
};

export default Footer;
