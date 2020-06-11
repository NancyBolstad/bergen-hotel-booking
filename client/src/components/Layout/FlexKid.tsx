import styled, { css } from 'styled-components';

interface FlexKidProps {
  hugRight?: boolean;
  spaceLeft?: boolean;
  spaceRight?: boolean;
  centerContent?: boolean;
  alignSelf?: string;
  flex?: number;
  width?: string;
  maxWidth?: string;
  flexBasis?: string;
  spacious?: boolean;
}

const FlexKid = styled.div<FlexKidProps>`
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
  ${props =>
    props.flexBasis &&
    css`
      flex-basis: ${props.flexBasis};
    `};
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `};
  ${props =>
    props.hugRight &&
    css`
      margin-left: auto;
    `};
  ${props =>
    props.spaceLeft &&
    css`
      padding-left: ${props.theme.spacing.s};
    `};
  ${props =>
    props.spaceRight &&
    css`
      padding-right: ${props.theme.spacing.s};
    `};
  ${props =>
    props.spacious &&
    css`
      ${props.spaceLeft &&
        css`
          padding-left: ${props.theme.spacing.m};
        `};
      ${props.spaceRight &&
        css`
          padding-right: ${props.theme.spacing.m};
        `};
    `};
  ${props =>
    props.centerContent &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  ${props =>
    props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `};
`;

export default FlexKid;
