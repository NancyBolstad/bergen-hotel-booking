import * as React from 'react';
import { Section, Wrapper, SectionTitle, More } from './styles';
import { ButtonLink } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, CardsList } from '../Layout';
import HotelCard from './HotelCard';
import { HotelDetails } from '../../types/response';

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
              {!!sectionTitle && (
                <SectionTitle
                  element="h2"
                  variant="h2"
                  content={sectionTitle}
                  top={24}
                  topDesktop={36}
                  bottom={24}
                  bottomDesktop={36}
                />
              )}
              <CardsList>
                {list.map((card, index) => (
                  <HotelCard key={`hotel-card${index}-${card.id}`} card={card} />
                ))}
              </CardsList>
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
