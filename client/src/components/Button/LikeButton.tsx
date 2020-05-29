import * as React from 'react';
import styled, { css } from 'styled-components';
import { heart, heartSolid } from '../../util/icons';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../reducer/favoriteCardsReducer';
import { HotelDetails } from '../../types/response';
import Button from './Button';

export interface HotelCard {
  card: HotelDetails;
}

const LikeButton: React.FunctionComponent<HotelCard> = ({ card }) => {
  const { favorites, dispatch } = React.useContext(Context);
  const [like, setLike] = React.useState<boolean>(() => {
    const found = favorites.find(item => {
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
    <LikeButtonWrapper>
      <LikeIcon
        variant="primary"
        size="small"
        isLiked={like}
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

const LikeButtonWrapper = styled.div<{ positionAbsolute?: boolean }>`
  display: flex;
  justify-content: flex-end;

  ${props =>
    props.positionAbsolute &&
    css`
      position: absolute;
      top: 0px;
      right: 0;
    `}
`;

const LikeIcon = styled(Button)<{ isLiked: boolean }>`
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 30px;
    fill: ${props => props.theme.colors.onBackground};
    margin-top: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.isLiked === true &&
    css`
      svg {
        fill: ${props => props.theme.colors.primary};
      }
    `}

  &:hover,
  &:focus {
    background-color: transparent;
    border: none;
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;

export default LikeButton;
