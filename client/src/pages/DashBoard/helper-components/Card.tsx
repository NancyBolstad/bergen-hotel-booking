import styled, { css } from 'styled-components';
import createMediaQuery from '../../../util/createMediaQuery';

interface CardProps {
  coloredTitle?: boolean;
}

const Card = styled.div<CardProps>`
  width: 100%;
  padding: ${props => `${props.theme.spacing.s}rem ${props.theme.spacing.m}rem`};
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 1rem;

  ${props =>
    props.coloredTitle &&
    css`
      h2 {
        color: ${props => props.theme.colors.primary};
      }
    `};

  ${createMediaQuery(
    'small',
    css`
      padding: ${props => props.theme.spacing.xs}rem;
    `,
  )};
`;

export default Card;
