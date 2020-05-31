import * as React from 'react';
import styled, { css } from 'styled-components';
import { heart, heartSolid } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { HotelDetails } from '../../types/response';

export interface HotelCard {
  card: HotelDetails;
  withText?: boolean;
  alginLeft?: boolean;
}

const LikeButton: React.FunctionComponent<HotelCard> = ({ card, withText, alginLeft }) => {
  const { favorites, dispatch } = React.useContext(Context);
  const [like, setLike] = React.useState<boolean>(() => {
    const found = favorites.find(item => {
      console.log(item.id);
      return item.id === card.id;
    });

    return found ? true : false;
  });

  function handleLikeDispatch() {
    setLike(!like);

    if (!like === true) {
      dispatch({
        type: Types.Like,
        payload: card,
      });
    } else {
      dispatch({
        type: Types.Dislike,
        payload: {
          id: card.id,
        },
      });
    }
  }
  return (
    <LikeButtonWrapper alignLeft={alginLeft}>
      <LikeIcon
        role="button"
        isLiked={like}
        withText={withText}
        onClick={e => {
          e.preventDefault();
          handleLikeDispatch();
        }}
        aria-label={`${like ? 'Dislike' : 'Like'} this accommodation`}
        title={`${like ? 'Dislike' : 'Like'} this accommodation`}
      >
        {like ? heartSolid : heart}
      </LikeIcon>
    </LikeButtonWrapper>
  );
};

const LikeButtonWrapper = styled.div<{ positionAbsolute?: boolean; alignLeft?: boolean }>`
  display: flex;
  justify-content: ${props => (props.alignLeft ? 'flex-start' : 'flex-end')};

  ${props =>
    props.positionAbsolute &&
    css`
      position: absolute;
      top: 0px;
      right: 0;
    `}
`;

export const LikeIcon = styled.button<{ isLiked: boolean; withText?: boolean }>`
  background-color: transparent;
  border: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  svg {
    width: 24px;
    height: 24px;
    fill: ${props =>
      props.isLiked ? props.theme.colors.primary : props.theme.colors.onBackground};
  }

  &:hover,
  &:focus {
    background-color: ${props => (props.withText ? props.theme.colors.secondary : 'transparent')};
    color: ${props => (props.withText ? props.theme.colors.dark : props.theme.colors.onBackground)};
    border: none;

    svg {
      fill: ${props => (props.withText ? props.theme.colors.dark : props.theme.colors.primary)};
    }
  }

  ${props =>
    props.withText &&
    css`
      display: flex;
      align-items: center;
      border: 2px solid ${props => props.theme.colors.primary};
      padding: ${props => props.theme.spacing.xs}rem 20px;
      border-radius: 4px;
      font-size: 1rem;
      color:${props => props.theme.colors.primary}
      hover {
        background-color: ${props => props.theme.colors.secondary};
        color:${props => props.theme.colors.primary}
      }
    `}
`;

export default LikeButton;
