import * as React from 'react';
import Typography from '../Typography/Typography';
import { ButtonExternal } from '../Button';
import { Genre, Platform2 } from '../../types/details';
import { CardDetailsWrapper, DetailImage, CardDetailsContent, RichText } from './styles';

export interface Props {
  title: string;
  image: string;
  description: string;
  websiteLink: string;
  genres: Genre[];
  platforms: Platform2[];
}

const CardDetails: React.FunctionComponent<Props> = ({
  title,
  image,
  description,
  websiteLink,
}) => {
  return (
    <CardDetailsWrapper>
      <Typography variant="h1" element="h2" top={32} bottom={26} content={title} />
      <DetailImage>
        <img src={image} alt={title} />
      </DetailImage>
      <CardDetailsContent>
        <RichText dangerouslySetInnerHTML={{ __html: description }} />
      </CardDetailsContent>
      <ButtonExternal
        variant="primary"
        size="large"
        href={`${websiteLink}`}
        title="Visit game website"
        target="_blank"
      >
        Play Game
      </ButtonExternal>
    </CardDetailsWrapper>
  );
};

export default CardDetails;
