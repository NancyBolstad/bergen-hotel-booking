import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer } from '../Layout';
import { PlainBannerTitle, PlainBannerContent } from './styles';
import { ButtonVariant, ButtonInternal } from '../Button/Button';

interface Props {
  title?: string;
  subTitle?: string;
  text?: string;
  backgroundColor?: 'surface' | 'secondaryVariant';
  isTitleColorRed?: boolean;
  backgroundImage?: ImageType;
  center?: 'center' | 'flex-start' | 'flex-end';
  large?: boolean;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  redirectLink?: string;
}

const PlainBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  text,
  backgroundColor,
  backgroundImage,
  isTitleColorRed,
  center,
  large,
  buttonVariant,
  buttonText,
  redirectLink,
}) => {
  return (
    <PlainBannerContent
      backgroundColor={backgroundColor ? backgroundColor : 'secondaryVariant'}
      imageUrl={backgroundImage?.url}
      align={center}
      large={large}
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
          {!!buttonText && !!redirectLink && (
            <ButtonInternal
              variant={buttonVariant ? buttonVariant : 'primary'}
              size="medium"
              to={redirectLink}
            >
              {buttonText}
            </ButtonInternal>
          )}
        </HorizontalSpacer>
      </WidthConstraints>
    </PlainBannerContent>
  );
};

export default PlainBanner;
