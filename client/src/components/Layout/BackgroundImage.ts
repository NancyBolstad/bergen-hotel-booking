import styled, { css } from 'styled-components';
import { IColors } from '../../types/theme';

type backgroundColor = keyof IColors;

interface SelectableImages {
  isSelectable?: boolean;
  customWidth?: string;
  customHeight?: string;
  selected?: boolean;
}

interface BackgroundInterface extends SelectableImages {
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

  ${props =>
    props.isSelectable &&
    css`
      position: relative;
      margin-right: ${props => props.theme.spacing.xs}rem;
      margin-bottom: ${props => props.theme.spacing.xs}rem;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    `};

  ${props =>
    props.customWidth &&
    css`
      width: ${props.customWidth};
    `}

  ${props =>
    props.customWidth &&
    css`
      height: ${props.customHeight};
    `}

    ${props =>
      props.selected &&
      css`
        border: 5px solid ${props => props.theme.colors.success};
      `};
`;

export const ClickableBackgroundImage = BackgroundImage.withComponent('a');

export default BackgroundImage;
