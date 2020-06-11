import styled from 'styled-components';

const RichText = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.colors.onBackground};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  white-space: pre-wrap;
  p {
    margin: ${props => props.theme.spacing.s}rem auto;
  }

  @media screen and (min-width: 1280px) {
    p {
      margin: ${props => props.theme.spacing.m}rem auto;
    }
  }
`;

export default RichText;
