import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../../types/types';
import { Grid, GridItem, WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import Typography from '../Typography';

interface Banner {
  backgroundImage?: Image;
  text?: string;
  redirectLink?: string;
}

interface BannerGridProps {
  sectionTitle?: string;
  banners: Banner[];
}

const InnerTextWrapper = styled(Link)<{ sizeLarge?: boolean }>`
  background-color: ${props => props.theme.colors.secondary};
  width: 15.6875rem;
  height: 8.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  opacity: 0.8;

  $:hover {
    opacity: 0.3;
  }

  h2,
  h3 {
    color: ${props => props.theme.colors.dark};
  }

  @media screen and (min-width: 1280px) {
    width: ${props => (props.sizeLarge ? '30rem' : '18rem')};
    height: ${props => (props.sizeLarge ? '20rem' : '12rem')};
  }
`;

const BannerGrid: React.FunctionComponent<BannerGridProps> = ({ sectionTitle, banners }) => {
  if (!banners) {
    return null;
  }

  return (
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
              <Typography variant="h2" element="h2" content={sectionTitle} />
            </VerticalSpacer>
          )}
          <Grid>
            {banners.map((banner, index) => (
              <GridItem
                key={index}
                row={index === 0 || index === 3 ? 'span 2' : undefined}
                column={index === 0 ? 'span 2' : index === 3 ? 'span 3' : undefined}
                imageUrl={banner.backgroundImage?.url}
              >
                {!!banner.text && (
                  <InnerTextWrapper
                    to={banner.redirectLink ? banner.redirectLink : ''}
                    sizeLarge={index === 0}
                  >
                    <Typography
                      variant="h2"
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
  );
};

export default BannerGrid;
