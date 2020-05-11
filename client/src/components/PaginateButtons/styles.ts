import styled, { css } from 'styled-components';
import setColorOpacity from '../../util/setColorOpacity';
import { ButtonAnchor } from '../../components/Button';

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacing.s}rem auto;
`;

const JumpPageButton = styled(ButtonAnchor)<{ isActive: boolean }>`
  margin: 0 ${props => props.theme.spacing.xs}rem;
  ${props =>
    props.isActive &&
    css`
      background-color: ${props => setColorOpacity(props.theme.colors.secondary, '0.5')};
    `}
`;

export { ButtonsWrapper, JumpPageButton };
