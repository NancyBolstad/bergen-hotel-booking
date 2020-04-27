import styled from 'styled-components';

export const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.xl}rem ${props => props.theme.spacing.m}rem;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
