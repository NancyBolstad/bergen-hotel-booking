import { Result } from '../types/data';
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Like = 'ADD_CARD',
  Dislike = 'DELETE_CARD',
}

export type Payload = {
  [Types.Like]: Result;
  [Types.Dislike]: {
    id: number;
  };
};

export type FavoriteActions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const favoriteCardsReducer = (state: Result[], action: FavoriteActions) => {
  switch (action.type) {
    case Types.Like:
      return [...state, action.payload];
    case Types.Dislike:
      return state ? state.filter(product => product.id !== action.payload.id) : [];
    default:
      return state;
  }
};

export default favoriteCardsReducer;
