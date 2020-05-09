import * as React from 'react';
import { Section, Wrapper, SectionTitle, More } from './styles';
import { ButtonInternal } from '../Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, CardsList } from '../Layout';
import HotelCard, { HotelDetails } from './HotelCard';

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
              <CardsList>
                {list.map((card, index) => (
                  <HotelCard
                    key={`hotel-card${index}-${card.id}`}
                    id={card.id}
                    name={card.name}
                    category={card.category}
                    descriptions={card.descriptions}
                    featuredImages={card.featuredImages}
                    price={card.price}
                  />
                ))}
              </CardsList>
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
