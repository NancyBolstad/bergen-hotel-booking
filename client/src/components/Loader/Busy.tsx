import styled, { css } from 'styled-components';

interface Props {
  busy?: boolean;
}

const Busy = styled.div<Props>`
  transition: opacity 0.12s ease-in-out;

  ${props =>
    props.busy &&
    css`
      opacity: 0.25;
    `};
`;

export default Busy;
