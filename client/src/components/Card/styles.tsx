import styled, { css } from 'styled-components';
import Button from '../Button';

export const CardWrapper = styled.div`
  background: ${props => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  color: ${props => props.theme.colors.onSurface};
  margin: calc(${props => props.theme.spacing.s}rem / 2);
  border: 2px solid ${props => props.theme.colors.primaryVariant};
  border-radius: 15px;
  transition: all 0.15s ease-in-out;

  @media screen and (min-width: 768px) {
    width: calc(50% - ${props => props.theme.spacing.xs}rem);
    padding: ${props => props.theme.spacing.m}rem;
    margin: calc(${props => props.theme.spacing.xs}rem / 2);
    margin-bottom: ${props => props.theme.spacing.m}rem;
  }
  @media screen and (min-width: 1280px) {
    width: calc(31.333% - ${props => props.theme.spacing.m / 2}rem);
    margin-bottom: ${props => props.theme.spacing.l}rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 15.5rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
`;

export const LikeButton = styled(Button)<{ isLiked: boolean }>`
  background-color: transparent;

  svg {
    width: 48px;
    height: 48px;
    stroke-width: 30px;
    fill: ${props => props.theme.colors.primary};
    margin-top: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.isLiked === true &&
    css`
      svg {
        fill: ${props => props.theme.colors.secondary};
      }
    `}
`;
