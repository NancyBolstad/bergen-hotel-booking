import styled from 'styled-components';

export const InfoListWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onSurface};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoListFlexParent = styled.ul`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.m}rem ${props => props.theme.spacing.xl}rem;
  display: flex;
  flex-direction: column;
`;

export const InfoItemFlexChild = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  width: 100%;
  p {
    max-width: 615px;
  }
`;

export const InfoItemTitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 615px;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${props => props.theme.colors.secondary};
    margin-left: ${props => props.theme.spacing.xs}rem;
    margin-top: 0.5rem;
  }
`;
