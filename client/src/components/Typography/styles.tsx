import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import pixelsToRem from '../../util/pixelsToRem';
import { Space as SpaceInterface, Styles } from './';

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
    props.isPrimaryColor ? props.theme.colors.primaryVariant : props.theme.colors.secondary};
  ${props =>
    props.variant === 'b1' &&
    css`
      ${props => createFontStyles(props.theme.fonts.b1)};
    `}
    ${props =>
      props.variant === 'b2' &&
      css`
        ${props => createFontStyles(props.theme.fonts.b2)};
      `}
   ${props =>
     props.variant === 'b3' &&
     css`
       ${props => createFontStyles(props.theme.fonts.b3)};
     `}
     ${props =>
       props.variant === 'h1' &&
       css`
         ${props => createFontStyles(props.theme.fonts.h1)};
       `}
    
    ${props =>
      props.variant === 'h2' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h3)};
      `}
    
    ${props =>
      props.variant === 'h3' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h4)};
      `}
    
    ${props =>
      props.variant === 'h4' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h4)};
      `}
         
    ${props =>
      props.variant === 'h5' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h5)};
      `}
         
    ${props =>
      props.variant === 'h6' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h6)};
      `}
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}

    ${Space};
`;
