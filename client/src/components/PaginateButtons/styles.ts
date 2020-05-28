import styled, { css } from 'styled-components';
import { ButtonLink } from '../../components/Button/Button';

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacing.s}rem auto;
`;

const JumpPageButton = styled(ButtonLink)<{ isActive: boolean }>`
  margin: 0 ${props => props.theme.spacing.xs}rem;
  border-radius: 5px;

  ${props =>
    props.isActive &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.dark};
    `}
`;

export { ButtonsWrapper, JumpPageButton };
