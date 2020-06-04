import React from 'react';
import styled, { css } from 'styled-components';
import { VerticalSpacer, WidthConstraints, Flex } from '../Layout';
import { ButtonInternal } from './Button';
import useIsTablet from '../../hooks/useIsTablet';
import { arrow } from '../../util/icons';
import Typography from '../Typography/Typography';

interface Props {
  totalPages: number;
  preHandler: () => any;
  nextHandler: () => any;
  jumpHandler: (pageNumber: number) => any;
  displayPrev: boolean;
  displayNext: boolean;
  currentPage: number;
}

export const PaginateButtons: React.FunctionComponent<Props> = ({
  totalPages,
  preHandler,
  nextHandler,
  jumpHandler,
  displayNext,
  displayPrev,
  currentPage,
}) => {
  const isTablet = useIsTablet();
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <VerticalSpacer>
      <WidthConstraints>
        <Flex direction="row" justify={isTablet ? 'space-around' : 'center'} align="center">
          {displayPrev && (
            <PrevNextButton
              to="/#"
              role="button"
              size="small"
              variant="secondaryVariant"
              aria-label="Go to previous page"
              title="Go to previous page"
              onClick={e => {
                e.preventDefault();
                preHandler();
              }}
            >
              {isTablet && <Typography element="span" variant="b2" content="Prev" />}
              {arrow}
            </PrevNextButton>
          )}
          {!isTablet &&
            pageNumbers.map((number, index) => (
              <JumpPageButton
                key={index}
                role="button"
                size="small"
                variant="secondary"
                isActive={index === currentPage - 1}
                aria-label={`Page ${number}`}
                title={`Page ${number}`}
                to="/#"
                onClick={e => {
                  e.preventDefault();
                  jumpHandler(number);
                }}
              >
                {number}
              </JumpPageButton>
            ))}
          {displayNext && (
            <PrevNextButton
              role="button"
              size="small"
              to="/#"
              variant="secondaryVariant"
              aria-label="Go to next page"
              title="Go to next page"
              onClick={e => {
                e.preventDefault();
                nextHandler();
              }}
              next
            >
              {arrow}
              {isTablet && <Typography element="span" variant="b2" content="Next" />}
            </PrevNextButton>
          )}
        </Flex>
      </WidthConstraints>
    </VerticalSpacer>
  );
};

export const JumpPageButton = styled(ButtonInternal)<{ isActive?: boolean }>`
  margin: 0 ${props => props.theme.spacing.xs}rem;
  border: none;
  ${props =>
    props.isActive &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.dark};
    `}
`;

export const PrevNextButton = styled(ButtonInternal)<{ next?: boolean }>`
  border: none;
  color: ${props => props.theme.colors.primary};
  svg {
    transform: ${props => (props.next ? 'rotate(-90deg)' : 'rotate(90deg)')};
    width: 36px;
    height: 36px;
    fill: ${props => props.theme.colors.primary};
  }
`;

export default PaginateButtons;
