import styled from 'styled-components';

export const Form = styled.form<{ leftAlign?: boolean }>`
  max-width: 680px;
  width: 100%;
  margin: 0 ${props => (props.leftAlign ? 0 : 'auto')};
  padding: ${props => props.theme.spacing.s}rem 0;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.leftAlign ? 'flex-start' : 'center')}
  align-items: flex-start;

  button {
    margin-top: ${props => props.theme.spacing.s}rem;
    margin-left: ${props => (props.leftAlign ? 0 : 'auto')};
    margin-right: ${props => (props.leftAlign ? 0 : 'auto')};
  }
`;
