import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const StyledLabelWrapper = styled.div`
  ${props => createFontStyles(props.theme.fonts.b2)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

export const StyledLabel = styled.label<{ isCheckbox?: boolean; isSameLine?: boolean }>`
  ${props => createFontStyles(props.theme.fonts.b2)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${props => props.theme.spacing.s}rem 0;
  width: 100%;

  ${props =>
    props.isCheckbox &&
    css`
      flex-direction: row;
      align-items: baseline;
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
    `}

  ${props =>
    props.isSameLine &&
    css`
      flex-direction: row;
      align-items: center;
      input {
        margin-left: ${props => props.theme.spacing.s}rem;
      }
      span {
        min-width: 40px;
      }
    `}
`;
