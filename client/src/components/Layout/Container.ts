import styled, { css } from 'styled-components';
import { IColors } from '../../types/theme';

export const Section = styled.section<{ backgroundColor?: keyof IColors; overflow?: boolean }>`
  background-color: ${props => props.theme.colors.background};

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.theme.colors[props.backgroundColor]};
    `}
`;

export const Article = styled.article``;
export const Aside = styled.aside``;
