import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => props.theme.colors.secondary};
  }
`;
