import styled, { css } from 'styled-components';
import createMediaQuery from '../../../util/createMediaQuery';
import Button from '../../Button/Button';
import createFontStyles from '../../../util/createFontStyles';

export const Card = styled.div`
  width: 100%;
  max-width: 1280px;
  overflow: auto;
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
  padding: ${props => props.theme.spacing.xs}rem
    ${props =>
      props.removed &&
      css`
        display: none;
      `};
`;

export const MessageCard = styled(Card)<{ removed?: boolean; busy?: boolean }>`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  p {
    max-width: 880px;
  }

  ${props =>
    props.busy &&
    css`
      opacity: 0.8;
    `};

  ${props =>
    props.removed &&
    css`
      display: none;
    `};
`;

export const MessageCardHeading = styled.a<{ expanded?: boolean }>`
  display: flex;
  padding-bottom: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;

  ${props => createFontStyles(props.theme.fonts.b1)}
  p {
    flex-basis: 80%;
    max-width: 880px;
  }
  svg {
    fill: ${props => props.theme.colors.primary};
    width: 24px;
    height: 24px;
    ${props =>
      props.expanded &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export default Card;
