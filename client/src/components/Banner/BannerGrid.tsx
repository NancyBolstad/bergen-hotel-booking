import * as React from 'react';
import { Image } from '../../types/response';
import {
  Grid,
  GridItem,
  WidthConstraints,
  VerticalSpacer,
  HorizontalSpacer,
  Section,
} from '../Layout';
import Typography from '../Typography/Typography';
import { InnerTextWrapper } from './styles';

interface Banner {
  backgroundImage?: Image;
  text?: string;
  redirectLink?: string;
}

interface BannerGridProps {
  sectionTitle?: string;
  banners: Banner[];
}

const BannerGrid: React.FunctionComponent<BannerGridProps> = ({ sectionTitle, banners }) => {
  if (!banners) {
    return null;
  }

  return (
    <Section>
      <VerticalSpacer topSpace="xs" topSpaceDesktop="xl" bottomSpace="xs" bottomSpaceDesktop="xl">
        <HorizontalSpacer>
          <WidthConstraints size="large">
            {!!sectionTitle && (
              <VerticalSpacer
                topSpace="xs"
                topSpaceDesktop="l"
                bottomSpace="xs"
                bottomSpaceDesktop="xl"
              >
                <Typography variant="h2" element="h2" content={sectionTitle} top={48} bottom={48} />
              </VerticalSpacer>
            )}
            <Grid>
              {banners.map((banner, index) => (
                <GridItem key={index} imageUrl={banner.backgroundImage?.url}>
                  {!!banner.text && (
                    <InnerTextWrapper
                      href={banner.redirectLink ? banner.redirectLink : ''}
                      aria-label={`View more about ${banner.text}`}
                      title={`View more about ${banner.text}`}
                    >
                      <Typography
                        variant="h3"
                        element={sectionTitle ? 'h3' : 'h2'}
                        content={banner.text}
                      />
                    </InnerTextWrapper>
                  )}
                </GridItem>
              ))}
            </Grid>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default BannerGrid;
