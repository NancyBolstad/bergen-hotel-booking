import styled, { css } from 'styled-components';
import { IColors } from '../../types/theme';

type backgroundColor = keyof IColors;

interface BackgroundInterface {
  imageUrl?: string;
  backgroundColor?: backgroundColor;
}

const backgroundCSS = css<BackgroundInterface>`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.theme.colors[props.backgroundColor]};
    `}
`;

export const BackgroundImage = styled.section<BackgroundInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  ${backgroundCSS}
`;

export const Content = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background};
  margin: 0 auto;
  width: 80vw;
  z-index: 1;
  top: -5.5625rem;
  padding 1.5rem 0 0 0;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    top: -8.0625rem;
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    max-width: 1280px;
    top: -3.5625rem;
    padding: 1rem 0 0 0;
  }
`;
