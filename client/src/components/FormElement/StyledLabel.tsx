import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const StyledLabelWrapper = styled.div`
  ${props => createFontStyles(props.theme.fonts.b3)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

export const StyledLabel = styled.label`
  ${props => createFontStyles(props.theme.fonts.b2)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${props => props.theme.spacing.s}rem 0;
  width: 100%;
`;
