import styled from 'styled-components';

export const Form = styled.form`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.s}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  button {
    margin-top: ${props => props.theme.spacing.s}rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
