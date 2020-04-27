import * as React from 'react';
import { MainContentWrapper } from './styles';

interface Props {}

export const MainContent: React.FunctionComponent<Props> = ({ children }) => {
  if (!children) return null;
  return <MainContentWrapper>{children}</MainContentWrapper>;
};

export default MainContent;
