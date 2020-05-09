import React from 'react';
import { Result } from '../../types/data';
import { CardsListWrapper } from './styles';
import Card from '../GameCard';

export interface Props {
  cards: Result[];
}

export const CardsList: React.FunctionComponent<Props> = ({ cards }) => {
  return (
    <CardsListWrapper>
      {(cards || []).map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </CardsListWrapper>
  );
};

export default CardsList;
