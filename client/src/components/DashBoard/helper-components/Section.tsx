import styled from 'styled-components';

const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.xs}rem;
  }

  button {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default Section;
