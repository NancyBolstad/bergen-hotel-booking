import styled from 'styled-components';

export const Wrapper = styled.section<{ background?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${props => props.background});
  background-color: ${props => props.theme.colors.secondary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 65vh;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  height: 79px;
  background-color: ${props => props.theme.colors.background};
`;
