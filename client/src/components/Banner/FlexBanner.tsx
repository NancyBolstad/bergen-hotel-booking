import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer, VerticalSpacer } from '../Layout';
import Typography from '../Typography';
import useIsMobile from '../../hooks/useIsMobile';
import { ButtonVariant, ButtonLink } from '../Button/Button';
import { FlexParent, FlexKid } from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  descriptions?: string;
  backgroundColor?: 'secondary' | 'surface' | 'background' | 'secondaryVariant';
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
              role="img"
              aria-label={figure?.alt}
            />
            <FlexKid backgroundColor={backgroundColor} isMobile={isMobile}>
              <HorizontalSpacer>
                {!!title && <Typography variant="h2" element="h2" content={title} />}
                {!!subTitle && <Typography variant="h3" element="h3" content={subTitle} />}
                {!!descriptions && <Typography variant="b1" element="p" content={descriptions} />}
                {!!buttonText && !!redirectLink && (
                  <ButtonLink
                    variant={buttonVariant ? buttonVariant : 'primary'}
                    size="medium"
                    href={redirectLink}
                    aria-label={buttonText}
                    title={buttonText}
                  >
                    {buttonText}
                  </ButtonLink>
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
