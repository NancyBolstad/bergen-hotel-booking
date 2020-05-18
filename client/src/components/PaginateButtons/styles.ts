import styled, { css } from 'styled-components';
import setColorOpacity from '../../util/setColorOpacity';
import { ButtonExternal } from '../../components/Button/Button';

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacing.s}rem auto;
`;

const JumpPageButton = styled(ButtonExternal)<{ isActive: boolean }>`
  margin: 0 ${props => props.theme.spacing.xs}rem;
  ${props =>
    props.isActive &&
    css`
      background-color: ${props => setColorOpacity(props.theme.colors.secondary, '0.5')};
    `}
`;

export { ButtonsWrapper, JumpPageButton };
