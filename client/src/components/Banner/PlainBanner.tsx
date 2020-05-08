import * as React from 'react';
import styled, { css } from 'styled-components';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer, VerticalSpacer } from '../Layout';
import Typography from '../Typography';
import { BackgroundImage, Image } from '../Image';

type alignVariant = 'flex-start' | 'center' | 'flex-end';

interface Props {
  title?: string;
  subTitle?: string;
  backgroundColor?: 'secondary' | 'surface';
  isTitleColorRed?: boolean;
  align?: alignVariant;
  image?: ImageType;
}

export const Content = styled(BackgroundImage)<{ align?: alignVariant }>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.align ? props.align : 'center')};
  align-items: ${props => (props.align ? props.align : 'center')};
  width: 100%;
`;

const PlainBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  backgroundColor,
  align,
  image,
  isTitleColorRed,
}) => {
  return (
    <Content
      backgroundColor={backgroundColor ? backgroundColor : 'secondary'}
      imageUrl={image?.url}
      align={align}
    >
      <WidthConstraints size="medium">
        <HorizontalSpacer>
          {!!title && (
            <Typography
              variant="h1"
              element="h1"
              content={title}
              isPrimaryColor={isTitleColorRed}
            />
          )}
          {!!subTitle && <Typography variant="h2" element="h2" content={subTitle} />}
        </HorizontalSpacer>
      </WidthConstraints>
    </Content>
  );
};

export default PlainBanner;
