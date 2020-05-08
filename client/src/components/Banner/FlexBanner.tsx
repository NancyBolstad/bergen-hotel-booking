import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer, VerticalSpacer } from '../Layout';
import Typography from '../Typography';
import useIsMobile from '../../hooks/useIsMobile';
import { ButtonVariant, ButtonInternal } from '../Button';
import { FlexParent, FlexKid } from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  descriptions?: string;
  backgroundColor?: 'secondary' | 'surface' | 'background';
  isImageRight?: boolean;
  figure?: ImageType;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  redirectLink?: string;
}

const FlexBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  descriptions,
  backgroundColor,
  isImageRight,
  figure,
  buttonVariant,
  buttonText,
  redirectLink,
}) => {
  const isMobile = useIsMobile();
  return (
    <VerticalSpacer>
      <HorizontalSpacer>
        <WidthConstraints size="large">
          <FlexParent isMobile={isMobile} isImageRight={isImageRight}>
            <FlexKid
              backgroundColor={backgroundColor}
              isMobile={isMobile}
              imageUrl={figure?.url}
              role="image"
              aria-label={figure?.alt}
            />
            <FlexKid backgroundColor={backgroundColor} isMobile={isMobile}>
              <HorizontalSpacer>
                {!!title && <Typography variant="h2" element="h2" content={title} />}
                {!!subTitle && <Typography variant="h3" element="h3" content={subTitle} />}
                {!!descriptions && <Typography variant="b1" element="p" content={descriptions} />}
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
            </FlexKid>
          </FlexParent>
        </WidthConstraints>
      </HorizontalSpacer>
    </VerticalSpacer>
  );
};

export default FlexBanner;
