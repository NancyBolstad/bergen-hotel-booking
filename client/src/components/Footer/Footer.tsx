import * as React from 'react';
import Typography from '../Typography/Typography';
import { FooterWrapper, FooterLinksWrapper, FooterLink } from './styles';
import { COPY_RIGHTS } from '../../data/footer';
import { Flex } from '../Layout/Flex';
import { Facebook, Twitter, Instagram } from '../../util/icons';
import { WidthConstraints, HorizontalSpacer, VerticalSpacer } from '../Layout';

export interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <FooterWrapper>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Flex direction="column" justify="center">
              <FooterLinksWrapper>
                <FooterLink href="" aria-label="Follow us on Facebook">
                  {Facebook}
                </FooterLink>
                <FooterLink href="" aria-label="Follow us on Twitter">
                  {Twitter}
                </FooterLink>
                <FooterLink href="" aria-label="Follow us on Instagram">
                  {Instagram}
                </FooterLink>
              </FooterLinksWrapper>
              <Typography
                variant="h6"
                element="span"
                content={COPY_RIGHTS}
                color="white"
                top={24}
              />
            </Flex>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </FooterWrapper>
  );
};

export default Footer;
