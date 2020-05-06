import styled, { css } from 'styled-components';
import { ISpacing } from '../../types/theme';

type Spacings = keyof ISpacing;

export interface Props {
  topSpace?: Spacings;
  topSpaceDesktop?: Spacings;
  bottomSpace?: Spacings;
  bottomSpaceDesktop?: Spacings;
}

const verticalMarginCSS = css<Props>`
  ${props =>
    !!props.topSpace &&
    css`
      margin-top: ${props.theme.spacing[props.topSpace]}rem;
    `};
  ${props =>
    !!props.topSpaceDesktop &&
    css`
      @media all and (min-width: 600px) {
        margin-top: ${props.theme.spacing[props.topSpaceDesktop]}rem;
      }
    `};
  ${props =>
    !!props.bottomSpace &&
    css`
      margin-bottom: ${props.theme.spacing[props.bottomSpace]}rem;
    `};
  ${props =>
    !!props.bottomSpaceDesktop &&
    css`
      @media all and (min-width: 600px) {
        margin-bottom: ${props.theme.spacing[props.bottomSpaceDesktop]}rem;
      }
    `};
`;

const VerticalSpacer = styled.div<Props>`
  margin: ${props => props.theme.spacing.m}rem 0;
  ${verticalMarginCSS}
`;

const HorizontalSpacer = styled.div`
  padding: 0 ${props => props.theme.spacing.m}rem;
  @media all and (min-width: 600px) {
    padding: 0 ${props => props.theme.spacing.l}rem;
  }
`;

export { VerticalSpacer, HorizontalSpacer };
