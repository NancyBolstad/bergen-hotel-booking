import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const ErrorMessage = styled.span`
  ${props => createFontStyles(props.theme.fonts.b1)};
  text-align: left;
  color: ${props => props.theme.colors.error};
`;
