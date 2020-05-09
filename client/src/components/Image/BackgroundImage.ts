import styled, { css } from 'styled-components';
import { IColors } from '../../types/theme';

type backgroundColor = keyof IColors;

interface BackgroundInterface {
  imageUrl?: string;
  backgroundColor?: backgroundColor;
}

export const backgroundCSS = css<BackgroundInterface>`
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

export const BackgroundImage = styled.div<BackgroundInterface>`
  width: 100%;
  ${backgroundCSS}
`;

export default BackgroundImage;
