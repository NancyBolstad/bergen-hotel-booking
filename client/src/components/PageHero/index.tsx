import * as React from 'react';
import { Wrapper, Content } from './styles';
import { Image } from '../../types/types';

interface Props {
  figure?: Image;
}

export const PageHero: React.FunctionComponent<Props> = ({ figure, children }) => {
  if (!children) return null;

  return (
    <Wrapper background={figure?.url} role="img" aria-label={figure ? figure.alt : 'background'}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default PageHero;
