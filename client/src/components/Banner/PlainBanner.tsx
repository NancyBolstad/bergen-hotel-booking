import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer } from '../Layout';
import { PlainBannerTitle, PlainBannerContent } from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  backgroundColor?: 'secondary' | 'surface';
  isTitleColorRed?: boolean;
  backgroundImage?: ImageType;
}

const PlainBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  backgroundColor,
  backgroundImage,
  isTitleColorRed,
}) => {
  return (
    <PlainBannerContent
      backgroundColor={backgroundColor ? backgroundColor : 'secondary'}
      imageUrl={backgroundImage?.url}
    >
      <WidthConstraints size="medium">
        <HorizontalSpacer>
          {!!title && (
            <PlainBannerTitle
              variant="h1"
              element="h1"
              content={title}
              isPrimaryColor={isTitleColorRed}
              hasBackgroundImage={backgroundImage ? true : false}
            />
          )}
          {!!subTitle && (
            <PlainBannerTitle
              variant="h2"
              element="h2"
              content={subTitle}
              hasBackgroundImage={backgroundImage ? true : false}
            />
          )}
        </HorizontalSpacer>
      </WidthConstraints>
    </PlainBannerContent>
  );
};

export default PlainBanner;
