import * as React from 'react';
import { Section, Wrapper, SectionTitle, More } from './styles';
import { ButtonInternal } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import { HotelDetails } from './HotelCard';
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
  if (!list) return null;

  return (
    <Section backgroundColor={backgroundColor}>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Wrapper>
              {!!sectionTitle && <SectionTitle element="h2" variant="h2" content={sectionTitle} />}
              <Flex direction="column">
                {list.map((card, index) => (
                  <HotelCardVariant
                    key={`hotel-card${index}-${card.id}`}
                    id={card.id}
                    name={card.name}
                    category={card.category}
                    descriptions={card.descriptions}
                    featuredImages={card.featuredImages}
                    price={card.price}
                  />
                ))}
              </Flex>
              {!!ctaText && !!ctaUrl && (
                <More>
                  <ButtonInternal to={ctaUrl} size="medium" variant="secondary">
                    {ctaText}
                  </ButtonInternal>
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
