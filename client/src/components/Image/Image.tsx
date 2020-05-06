import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import { widthSize } from '../Layout/WidthConstraints';
import { Flex } from '../Flex';
import Typography from '../Typography';
import { Image as StyledImage, CaptionWrapper } from './styles';

interface Props {
  image?: ImageType;
  size: widthSize;
}

export const Image: React.FunctionComponent<Props> = ({ image, size }) => {
  if (!image) {
    return null;
  }

  return (
    <>
      <WidthConstraints size={size}>
        <Flex direction="column">
          <StyledImage src={image.url} alt={image.alt} />
          {!!image.caption && (
            <VerticalSpacer topSpace="s" bottomSpace="s">
              <HorizontalSpacer>
                <CaptionWrapper size="small">
                  <Typography element="span" variant="b1" content={image.caption} top={16} />
                </CaptionWrapper>
              </HorizontalSpacer>
            </VerticalSpacer>
          )}
        </Flex>
      </WidthConstraints>
    </>
  );
};
