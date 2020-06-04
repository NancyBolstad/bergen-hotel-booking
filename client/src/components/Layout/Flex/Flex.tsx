import styled, { css } from 'styled-components';

type direction = 'column' | 'row';

interface FlexProps {
  align?: string;
  justify?: string;
  direction?: direction;
  maxHeight?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: wrap;
  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `};

  ${props =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight};
      overflow-y: auto;
    `};
`;

export default Flex;
