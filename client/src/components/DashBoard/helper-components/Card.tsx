import styled, { css } from 'styled-components';
import createMediaQuery from '../../../util/createMediaQuery';

const Card = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: ${props => `${props.theme.spacing.s}rem ${props.theme.spacing.xs}rem`};
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  max-height: 50vh;
  overflow: auto;

  ${createMediaQuery(
    'small',
    css`
      padding: ${props => props.theme.spacing.m}rem ${props => props.theme.spacing.s}rem;
    `,
  )};
`;

export default Card;
