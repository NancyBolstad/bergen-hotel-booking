import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterContent = styled.div`
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
  a:hover {
    opacity: 0.5;
  }
`;
