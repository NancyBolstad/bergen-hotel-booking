import * as React from 'react';
import { BlogCard as StyledCard, BlogImage, BlogTitle, BlogIntroText } from './styles';
import { Image } from '../../types/types';
import transformLangText from '../../util/transformLangText';

export interface Props {
  id?: string;
  title?: string;
  intro?: string;
  content?: string;
  author?: string;
  category?: string;
  image?: Image;
}

export const BlogCard: React.FunctionComponent<Props> = ({ id, title, intro, image }) => {
  return (
    <StyledCard to={`/blog/${id}`} title={title} aria-label={`Go to ${title}`}>
      {!!image && <BlogImage src={image.url} alt={image.alt} />}
      {!!title && <BlogTitle element="h3" variant="h3" content={title} />}
      {!!intro && (
        <BlogIntroText element="p" variant="b3" content={transformLangText(intro, 180)} />
      )}
    </StyledCard>
  );
};

export default BlogCard;
