import React from 'react';
import { ButtonLink } from '../Button/Button';
import { ButtonsWrapper, JumpPageButton } from './styles';

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
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ButtonsWrapper>
      {displayPrev && (
        <ButtonLink
          size="small"
          variant="primary"
          href="#"
          aria-label="Go to previous page"
          title="Go to previous page"
          onClick={e => {
            e.preventDefault();
            preHandler();
          }}
        >
          Prev
        </ButtonLink>
      )}
      {pageNumbers.map((number, index) => (
        <JumpPageButton
          key={index}
          size="small"
          variant="secondary"
          isActive={index === currentPage - 1}
          aria-label={`Page ${number}`}
          title={`Page ${number}`}
          href="#"
          onClick={e => {
            e.preventDefault();
            jumpHandler(number);
          }}
        >
          {number}
        </JumpPageButton>
      ))}
      {displayNext && (
        <ButtonLink
          size="small"
          variant="secondary"
          aria-label="Go to next page"
          title="Go to next page"
          href="#"
          onClick={e => {
            e.preventDefault();
            nextHandler();
          }}
        >
          Next
        </ButtonLink>
      )}
    </ButtonsWrapper>
  );
};

export default PaginateButtons;
