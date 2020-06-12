import * as React from 'react';
import { BackgroundImage, Content } from './styles';
import { Image } from '../../types/response';
import { IColors } from '../../types/theme';

interface Props {
  figure?: Image;
  backgroundColor?: keyof IColors;
}

export const PageHero: React.FunctionComponent<Props> = ({ figure, backgroundColor, children }) => {
  if (!children) return null;

  return (
    <>
      <BackgroundImage
        imageUrl={figure?.url}
        backgroundColor={backgroundColor ? backgroundColor : 'secondary'}
        role="img"
        aria-label={figure ? figure.alt : 'background'}
      ></BackgroundImage>
      <Content>{children}</Content>
    </>
  );
};

export default PageHero;
