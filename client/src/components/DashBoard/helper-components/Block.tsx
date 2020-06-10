import styled, { css } from 'styled-components';
import createMediaQuery from '../../../util/createMediaQuery';
import Button from '../../Button/Button';
import { Flex } from '../../Layout';

export const Block = styled.div`
  width: 100%;
  max-width: 1280px;
  overflow: auto;
  padding: ${props => `${props.theme.spacing.s}rem ${props.theme.spacing.xs}rem`};
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.xs}rem;
  }

  ${createMediaQuery(
    'small',
    css`
      padding: ${props => props.theme.spacing.m}rem ${props => props.theme.spacing.s}rem;
    `,
  )};

  form {
    padding: none;
  }
`;

export const EditableWrapper = styled.div`
  position: relative;
`;

export const DeleteButton = styled(Button)<{ removed?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.xs}rem
    ${props =>
      props.removed &&
      css`
        display: none;
      `};
`;

export const MessageCard = styled(Block)<{ removed?: boolean; busy?: boolean }>`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  p {
    max-width: 880px;
  }

  ${props =>
    props.busy &&
    css`
      opacity: 0.5;
    `};

  ${props =>
    props.removed &&
    css`
      display: none;
    `};
`;

export const ExpandButton = styled.a<{ expanded?: boolean }>`
  display: flex;
  padding-bottom: ${props => props.theme.spacing.xs}rem;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  display: relative;
  font-family: ${props => props.theme.fonts.b1.family};
  font-weight: ${props => props.theme.fonts.b1.weight};
  font-size: ${props => props.theme.fonts.b1.weight}rem;
  ${props =>
    props.theme.fonts.b1.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b1.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b1.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b1.mediaQueries[0].query}px) {
        ${props.theme.fonts.b1.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b1.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b1.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b1.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b1.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b1.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b1.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b1.mediaQueries[0].lineHeight};
          `};
      }
    `}

  p {
    flex-basis: 80%;
    max-width: 880px;
  }
  svg {
    fill: ${props => props.theme.colors.primary};
    width: 24px;
    height: 24px;
    ${props =>
      props.expanded &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export const EditingButtonGroup = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
`;
