import * as React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export const StyledMain = styled.main<{ isDashboard?: boolean }>`
  width: 100%;
  height: 100%;
  min-height: 75vh;
  background-color: ${props =>
    props.isDashboard ? props.theme.colors.backgroundVariant : props.theme.colors.background};
`;

export const Main: React.FunctionComponent = ({ children }) => {
  const location = useLocation();

  if (!children) return null;

  return <StyledMain isDashboard={location.pathname.includes('dashboard')}>{children}</StyledMain>;
};
