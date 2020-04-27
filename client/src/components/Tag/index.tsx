import * as React from 'react';
import Typography from '../Typography';
import { Genre, Platform2 } from '../../types/details';
import {
  TagWrapper,
  TagList,
  CategoriesButtonWrapper,
  CategoriesButton,
  CategoriesList,
  CategoriesListItem,
} from './styles';

export interface Props {
  genres: Genre[];
  platforms: Platform2[];
}

const Tag: React.FunctionComponent<Props> = ({ genres, platforms }) => {
  const [isGenres, setIsGenres] = React.useState(true);
  const [isPlatforms, setIsPlatforms] = React.useState(false);

  React.useEffect(() => {
    if (isGenres) {
      setIsPlatforms(false);
    }
  }, [isGenres]);

  React.useEffect(() => {
    if (isPlatforms) {
      setIsGenres(false);
    }
  }, [isPlatforms]);

  return (
    <TagWrapper>
      <CategoriesButtonWrapper>
        <CategoriesButton
          size="small"
          variant="tertiary"
          active={isGenres}
          onClick={e => {
            e.preventDefault();
            setIsGenres(true);
          }}
        >
          Genres
        </CategoriesButton>
        <CategoriesButton
          size="small"
          variant="tertiary"
          active={isPlatforms}
          onClick={e => {
            e.preventDefault();
            setIsPlatforms(true);
          }}
        >
          Platforms
        </CategoriesButton>
      </CategoriesButtonWrapper>
      <TagList>
        <CategoriesList>
          {isGenres &&
            genres.map((genre, index) => {
              return (
                <CategoriesListItem key={index}>
                  <Typography element="span" variant="b2" content={genre.name} />
                </CategoriesListItem>
              );
            })}
          {isPlatforms &&
            platforms.map((platform, index) => {
              return (
                <CategoriesListItem key={index}>
                  <Typography element="span" variant="b2" content={platform.platform.name} />
                </CategoriesListItem>
              );
            })}
        </CategoriesList>
      </TagList>
    </TagWrapper>
  );
};

export default Tag;
