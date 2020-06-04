import * as React from 'react';
import { Wrapper, SectionTitle, More } from './styles';
import { ButtonLink } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, Section, Flex } from '../Layout';
import { HotelDetails } from '../../types/response';
import HotelCardVariant from './HotelCardVariant';
import { navigationArrow } from '../../util/icons';

export interface Props {
  sectionTitle?: string;
  subtitle?: string;
  backgroundColor?: keyof IColors;
  list?: HotelDetails[];
  ctaText?: string;
  ctaUrl?: string;
}

const HotelCardsListVariant: React.FunctionComponent<Props> = ({
  sectionTitle,
  ctaText,
  ctaUrl,
  list,
  backgroundColor,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Wrapper>
              {!!sectionTitle && <SectionTitle element="h2" variant="h2" content={sectionTitle} />}
              <Flex direction="column">
                {(list || []).map((card, index) => (
                  <HotelCardVariant card={card} />
                ))}
              </Flex>
              {!!ctaText && !!ctaUrl && (
                <More>
                  <ButtonLink href={ctaUrl} size="medium" variant="secondary">
                    {ctaText} {navigationArrow}
                  </ButtonLink>
                </More>
              )}
            </Wrapper>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default HotelCardsListVariant;
