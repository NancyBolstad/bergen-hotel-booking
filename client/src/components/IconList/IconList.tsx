import * as React from 'react';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints, CardsList, Section } from '../Layout';
import Typography from '../Typography';
import { ContentWrapper, Item, ServiceListWrapper } from './styles';
import { service, topRated, bestPrice } from '../../util/icons';

export interface FeaturesListProps {
  sectionTitle?: string;
}

export const IconList: React.FunctionComponent<FeaturesListProps> = ({ sectionTitle }) => {
  return (
    <Section>
      <ContentWrapper direction="column">
        <WidthConstraints size="large">
          <VerticalSpacer topSpace="s" bottomSpace="s" topSpaceDesktop="s" bottomSpaceDesktop="s">
            <HorizontalSpacer>
              {!!sectionTitle && <Typography element="h2" variant="h2" content={sectionTitle} />}
              <ServiceListWrapper>
                <Item>
                  {bestPrice}
                  <Typography element="span" variant="b2" content="Best Price Guarantee" top={16} />
                </Item>
                <Item>
                  {service}
                  <Typography element="span" variant="b2" content="24/7 Service" top={16} />
                </Item>
                <Item>
                  {topRated}
                  <Typography
                    element="span"
                    variant="b2"
                    content="Most Popular Travel Platform"
                    top={16}
                  />
                </Item>
              </ServiceListWrapper>
            </HorizontalSpacer>
          </VerticalSpacer>
        </WidthConstraints>
      </ContentWrapper>
    </Section>
  );
};

export default IconList;
