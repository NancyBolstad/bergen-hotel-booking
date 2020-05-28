import * as React from 'react';
import { check } from '../../util/icons';
import {
  InfoListWrapper,
  InfoListFlexParent,
  InfoItemFlexChild,
  InfoItemTitleWrapper,
} from './styles';
import Typography from '../Typography/Typography';
import { Flex } from '../Flex';

interface InfoBox {
  title: string;
  content: string;
}

export interface InfoListProps {
  sectionTitle?: string;
  list?: InfoBox[];
}

export const InfoList: React.FunctionComponent<InfoListProps> = ({ sectionTitle, list }) => {
  return (
    <InfoListWrapper>
      <Flex direction="column" justify="center" align="center">
        {!!sectionTitle && (
          <Typography element="h2" variant="h2" top={32} bottom={32} content={sectionTitle} />
        )}
        <InfoListFlexParent>
          {(list || []).map((box, index) => (
            <InfoItemFlexChild key={index}>
              {!!box.title && (
                <InfoItemTitleWrapper>
                  {check}
                  <Typography element="h3" variant="h3" content={box.title} isPrimaryColor />
                </InfoItemTitleWrapper>
              )}
              {!!box.content && <Typography element="p" variant="b1" content={box.content} />}
            </InfoItemFlexChild>
          ))}
        </InfoListFlexParent>
      </Flex>
    </InfoListWrapper>
  );
};

export default InfoList;
