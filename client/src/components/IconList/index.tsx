import * as React from 'react';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints, CardsList } from '../Layout';
import Typography from '../Typography';
import { ContentWrapper, Item } from './styles';
import { service, topRated, bestPrice } from '../../util/icons';

export interface FeaturesListProps {
  sectionTitle?: string;
}

export const IconList: React.FunctionComponent<FeaturesListProps> = ({ sectionTitle }) => {
  return (
    <ContentWrapper direction="column">
      <WidthConstraints size="large">
        <VerticalSpacer topSpace="xs" topSpaceDesktop="s" bottomSpace="xs" bottomSpaceDesktop="m">
          <HorizontalSpacer>
            {!!sectionTitle && <Typography element="h2" variant="h2" content={sectionTitle} />}
            <CardsList>
              <Item>
                {bestPrice}
                <Typography
                  element="span"
                  variant="b2"
                  content="Best Price Guarantee"
                  top={16}
                  topDesktop={32}
                />
              </Item>
              <Item>
                {service}
                <Typography
                  element="span"
                  variant="b2"
                  content="24/7 Service"
                  top={16}
                  topDesktop={32}
                />
              </Item>
              <Item>
                {topRated}
                <Typography
                  element="span"
                  variant="b2"
                  content="Most Popular Travel Platform"
                  top={16}
                  topDesktop={32}
                />
              </Item>
            </CardsList>
          </HorizontalSpacer>
        </VerticalSpacer>
      </WidthConstraints>
    </ContentWrapper>
  );
};

export default IconList;
