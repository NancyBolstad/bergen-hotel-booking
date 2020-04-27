import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.onSurface};
    text-decoration: none;
  }
  a:hover {
    opacity: 0.5;
  }
`;
