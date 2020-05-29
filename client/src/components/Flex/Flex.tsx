import styled, { css } from 'styled-components';

type direction = 'column' | 'row';

interface FlexProps {
  align?: string;
  justify?: string;
  direction?: direction;
  wrap?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `};

  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `};
`;

export default Flex;
