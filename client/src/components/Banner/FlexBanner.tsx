import * as React from 'react';
import { Image as ImageType } from '../../types/response';
import { WidthConstraints, HorizontalSpacer, VerticalSpacer, Section } from '../Layout';
import Typography from '../Typography/Typography';
import { ButtonVariant, ButtonLink } from '../Button/Button';
import { FlexParent, FlexColumn } from './styles';
import { navigationArrow } from '../../util/icons';

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
  return (
    <Section>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <FlexParent isImageRight={isImageRight}>
              <FlexColumn
                backgroundColor={backgroundColor}
                imageUrl={figure?.url}
                role="img"
                aria-label={figure?.alt}
              />
              <FlexColumn backgroundColor={backgroundColor}>
                <HorizontalSpacer>
                  <WidthConstraints size="small">
                    {!!title && (
                      <Typography variant="h2" element="h2" content={title} bottom={32} />
                    )}
                    {!!subTitle && <Typography variant="h3" element="h3" content={subTitle} />}
                    {!!descriptions && (
                      <Typography
                        variant="b3"
                        element="p"
                        content={descriptions}
                        bottom={16}
                        top={12}
                      />
                    )}
                    {!!buttonText && !!redirectLink && (
                      <ButtonLink
                        variant={buttonVariant ? buttonVariant : 'primary'}
                        size="medium"
                        href={redirectLink}
                        aria-label={buttonText}
                        title={buttonText}
                      >
                        {buttonText} {navigationArrow}
                      </ButtonLink>
                    )}
                  </WidthConstraints>
                </HorizontalSpacer>
              </FlexColumn>
            </FlexParent>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default FlexBanner;
