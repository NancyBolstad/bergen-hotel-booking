import styled, { css } from 'styled-components';
import pixelsToRem from '../../util/pixelsToRem';
import { Space as SpaceInterface, Styles } from './Typography';

export const FontStyles = css<Styles>`
  font-family: ${props => props.theme.fonts[props.variant].family};
  font-weight: ${props => props.theme.fonts[props.variant].weight};
  font-size: ${props => props.theme.fonts[props.variant].weight}rem;
  ${props =>
    props.theme.fonts[props.variant].lineHeight &&
    css`
      line-height: ${props.theme.fonts[props.variant].lineHeight};
    `};

  ${props =>
    props.theme.fonts[props.variant].mediaQueries &&
    (props.theme.fonts[props.variant].mediaQueries || []).map(
      query => css`
        @media (min-width: ${query.query}px) {
          ${query.family &&
            css`
              font-family: ${query.family};
            `};
          ${query.weight &&
            css`
              font-weight: ${query.weight};
            `};
          ${query.size &&
            css`
              font-size: ${query.size}rem;
            `};
          ${query.lineHeight &&
            css`
              line-height: ${query.lineHeight};
            `};
        }
      `,
    )};
`;

export const Space = css<SpaceInterface>`
  ${props =>
    !!props.top &&
    css`
      margin-top: ${pixelsToRem(props.top)}rem;
    `};
  ${props =>
    !!props.topDesktop &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.small}) {
        margin-top: ${pixelsToRem(props.topDesktop)}rem;
      }
    `};
  ${props =>
    !!props.bottom &&
    css`
      margin-bottom: ${pixelsToRem(props.bottom)}rem;
    `};
  ${props =>
    !!props.bottomDesktop &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.small}) {
        margin-bottom: ${pixelsToRem(props.bottomDesktop)}rem;
      }
    `};
`;

export const Text = styled.p<Styles>`
  color: ${props =>
    props.isPrimaryColor ? props.theme.colors.primary : props.theme.colors.onBackground};

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
  ${props =>
    props.textTransform &&
    css`
      text-transform: ${props.textTransform};
    `}

  ${props =>
    props.color &&
    css`
      color: ${props.theme.colors[props.color]};
    `}

  ${Space};
  ${FontStyles};
`;
