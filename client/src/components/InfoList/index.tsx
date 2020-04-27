import * as React from 'react';
import { check } from '../../util/icons';
import {
  InfoListWrapper,
  InfoListFlexParent,
  InfoItemFlexChild,
  InfoItemTitleWrapper,
} from './styles';
import Typography from '../Typography';

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
      {!!sectionTitle && (
        <Typography element="h2" variant="h2" top={32} bottom={32} content={sectionTitle} />
      )}
      <InfoListFlexParent>
        {(list || []).map((box, index) => (
          <InfoItemFlexChild key={index}>
            {!!box.title && (
              <InfoItemTitleWrapper>
                {check}
                <Typography element="h2" variant="h2" content={box.title} />
              </InfoItemTitleWrapper>
            )}
            {!!box.content && (
              <Typography element="p" variant="b1" content={box.content} isPrimaryColor />
            )}
          </InfoItemFlexChild>
        ))}
      </InfoListFlexParent>
    </InfoListWrapper>
  );
};

export default InfoList;
