import * as React from 'react';
import { StyledMain } from './styles';

interface Props {}

export const Main: React.FunctionComponent<Props> = ({ children }) => {
  if (!children) return null;
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
