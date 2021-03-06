import * as React from 'react';
import { Image as ImageType } from '../../types/response';
import { WidthConstraints, HorizontalSpacer, Section, VerticalSpacer, Flex } from '../Layout';
import { PlainBannerTitle, PlainBannerContent } from './styles';
import { ButtonVariant, ButtonLink, Size } from '../Button/Button';
import { navigationArrow } from '../../util/icons';

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
  buttonSize?: Size;
  widthNavigationIcon?: boolean;
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
  buttonSize,
  widthNavigationIcon,
}) => {
  return (
    <Section>
      <PlainBannerContent
        backgroundColor={backgroundColor ? backgroundColor : 'secondaryVariant'}
        imageUrl={backgroundImage?.url}
        align={center}
        large={large}
      >
        <VerticalSpacer>
          <HorizontalSpacer>
            <WidthConstraints size="large">
              <Flex direction="column" justify="center">
                {!!subTitle && (
                  <PlainBannerTitle
                    variant="b2"
                    element="h1"
                    content={subTitle}
                    hasBackgroundImage={backgroundImage ? true : false}
                    textTransform="capitalize"
                  />
                )}
                {!!title && (
                  <PlainBannerTitle
                    variant="h1"
                    element="h1"
                    content={title}
                    isPrimaryColor={isTitleColorRed}
                    hasBackgroundImage={backgroundImage ? true : false}
                    textTransform="capitalize"
                  />
                )}
                {!!text && (
                  <PlainBannerTitle
                    variant="b3"
                    element="p"
                    content={text}
                    maxWidth={650}
                    hasBackgroundImage={backgroundImage ? true : false}
                  />
                )}
                {!!buttonText && !!redirectLink && (
                  <ButtonLink
                    variant={buttonVariant ? buttonVariant : 'primary'}
                    size={buttonSize ? buttonSize : 'medium'}
                    href={redirectLink}
                    aria-label={buttonText}
                    title={buttonText}
                  >
                    {buttonText}
                    {widthNavigationIcon ? navigationArrow : null}
                  </ButtonLink>
                )}
              </Flex>
            </WidthConstraints>
          </HorizontalSpacer>
        </VerticalSpacer>
      </PlainBannerContent>
    </Section>
  );
};

export default PlainBanner;
