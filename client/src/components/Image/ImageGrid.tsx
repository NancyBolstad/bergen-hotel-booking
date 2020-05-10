import * as React from 'react';
import styled from 'styled-components';
import { Image } from '../../types/types';
import { Grid, GridItem, WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';

interface ImageGridProps {
  images?: Image[];
}

const ImageGrid: React.FunctionComponent<ImageGridProps> = ({ images }) => {
  if (!images) {
    return null;
  }

  return (
    <VerticalSpacer topSpace="xs" topSpaceDesktop="l" bottomSpace="xs" bottomSpaceDesktop="l">
      <HorizontalSpacer>
        <WidthConstraints size="large">
          <Grid>
            {images.map((image, index) =>
              image.url ? (
                <GridItem
                  key={index}
                  row={index === 0 || index === 3 ? 'span 2' : undefined}
                  column={index === 0 ? 'span 2' : index === 3 ? 'span 3' : undefined}
                  imageUrl={image.url}
                  role="image"
                  aria-label={image.alt ? image.alt : `Grid image ${index}`}
                ></GridItem>
              ) : null,
            )}
          </Grid>
        </WidthConstraints>
      </HorizontalSpacer>
    </VerticalSpacer>
  );
};

export default ImageGrid;
