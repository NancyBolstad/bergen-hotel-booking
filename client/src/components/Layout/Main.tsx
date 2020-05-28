import * as React from 'react';
import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  min-height: 75vh;
  background-color: ${props => props.theme.colors.background};
`;

export const Main: React.FunctionComponent = ({ children }) => {
  if (!children) return null;
  return <StyledMain>{children}</StyledMain>;
};
