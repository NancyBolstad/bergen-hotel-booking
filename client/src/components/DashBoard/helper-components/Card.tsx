import styled, { css } from 'styled-components';
import createMediaQuery from '../../../util/createMediaQuery';
import Button from '../../Button/Button';

export const Card = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: ${props => `${props.theme.spacing.s}rem ${props.theme.spacing.xs}rem`};
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 4px;

  ${createMediaQuery(
    'small',
    css`
      padding: ${props => props.theme.spacing.m}rem ${props => props.theme.spacing.s}rem;
    `,
  )};
`;

export const EditableWrapper = styled.div`
  position: relative;
`;

export const DeleteButton = styled(Button)<{ removed?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.surface};
  padding: 0;
  ${props =>
    props.removed &&
    css`
      display: none;
    `};
`;

export default Card;
