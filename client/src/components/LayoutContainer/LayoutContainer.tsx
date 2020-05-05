import styled, { css } from 'styled-components';

type layout = 'small' | 'medium' | 'large' | 'fluid';

interface Props {
  size?: layout;
  custom?: string;
}

const LayoutContainer = styled.div<Props>`
  margin: 0 auto;
  ${props =>
    props.size === 'small' &&
    css`
      max-width: 650px;
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      max-width: 836px;
    `};
  ${props =>
    props.size === 'large' &&
    css`
      max-width: 1244px;
    `};
  ${props =>
    props.size === 'fluid' &&
    css`
      max-width: 100%;
    `};
  ${props =>
    props.custom &&
    css`
      max-width: ${props.custom};
    `};
`;

export default LayoutContainer;
