import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const StyledCheckboxWrapper = styled.label`
  ${props => createFontStyles(props.theme.fonts.b1)};
  margin-top: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: ${props => props.theme.colors.onBackground};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => createFontStyles(props.theme.fonts.b1)};

  input {
    margin-right: ${props => props.theme.spacing.xs}rem;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.onBackground};
    background-color: ${props => props.theme.colors.background};
    margin-top: ${props => props.theme.spacing.xs}rem;
    @supports (-webkit-touch-callout: none) {
      border-radius: 0;
    }
  }
  p {
    margin: 0;
  }
`;
