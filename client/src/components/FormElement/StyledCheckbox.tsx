import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import createMediaQuery from '../../util/createMediaQuery';

export const StyledCheckboxWrapper = styled.label`
  ${props => createFontStyles(props.theme.fonts.b1)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: ${props => props.theme.colors.onBackground};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => createFontStyles(props.theme.fonts.b1)};

  input {
    margin-right: ${props => props.theme.spacing.xs}rem;
    @supports (-webkit-touch-callout: none) {
      border-radius: 0;
    }
  }
  p {
    margin: 0;
  }
`;
