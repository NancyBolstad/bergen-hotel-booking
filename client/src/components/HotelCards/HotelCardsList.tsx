import * as React from 'react';
import { Wrapper, SectionTitle, More } from './styles';
import { ButtonLink } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, CardsList, Section } from '../Layout';
import HotelCard from './HotelCard';
import { HotelDetails } from '../../types/response';
import { navigationArrow } from '../../util/icons';

export interface Props {
  sectionTitle?: string;
  subtitle?: string;
  backgroundColor?: keyof IColors;
  list?: HotelDetails[];
  ctaText?: string;
  ctaUrl?: string;
}

const HotelCardsList: React.FunctionComponent<Props> = ({
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
                  topDesktop={48}
                  bottom={24}
                  bottomDesktop={48}
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

export default HotelCardsList;
