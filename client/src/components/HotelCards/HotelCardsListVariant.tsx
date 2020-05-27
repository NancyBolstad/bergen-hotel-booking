import * as React from 'react';
import { Section, Wrapper, SectionTitle, More } from './styles';
import { ButtonLink } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import { HotelDetails } from '../../types/response';
import HotelCardVariant from './HotelCardVariant';
import { Flex } from '../Flex';

export interface Props {
  sectionTitle?: string;
  subtitle?: string;
  backgroundColor?: keyof IColors;
  list?: HotelDetails[];
  ctaText?: string;
  ctaUrl?: string;
}

export const HotelCardsList: React.FunctionComponent<Props> = ({
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
                    {ctaText}
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

export default HotelCardsList;
