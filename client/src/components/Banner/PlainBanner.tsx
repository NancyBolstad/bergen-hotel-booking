import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer } from '../Layout';
import { PlainBannerTitle, PlainBannerContent } from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  text?: string;
  backgroundColor?: 'surface' | 'secondaryVariant';
  isTitleColorRed?: boolean;
  backgroundImage?: ImageType;
  center?: 'center' | 'flex-start' | 'flex-end';
}

const PlainBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  text,
  backgroundColor,
  backgroundImage,
  isTitleColorRed,
  center,
}) => {
  return (
    <PlainBannerContent
      backgroundColor={backgroundColor ? backgroundColor : 'secondaryVariant'}
      imageUrl={backgroundImage?.url}
      align={center}
    >
      <WidthConstraints size="large">
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
          {!!text && (
            <PlainBannerTitle
              variant="b3"
              element="p"
              content={text}
              maxWidth={650}
              bottom={56}
              hasBackgroundImage={backgroundImage ? true : false}
            />
          )}
        </HorizontalSpacer>
      </WidthConstraints>
    </PlainBannerContent>
  );
};

export default PlainBanner;
