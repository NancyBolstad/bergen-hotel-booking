import * as React from 'react';
import { BlogCard as StyledCard, BlogImage, BlogTitle, BlogIntroText } from './styles';
import { Blog } from '../../types/response';
import transformLangText from '../../util/transformLangText';

export const BlogCard: React.FunctionComponent<Blog> = ({ id, title, intro, images }) => {
  return (
    <StyledCard href={`/blog/${id}`} title={title} aria-label={`Go to ${title}`}>
      {!!images && <BlogImage src={images[0].url} alt={images[0].alt} />}
      {!!title && <BlogTitle element="h3" variant="h3" content={title} />}
      {!!intro && (
        <BlogIntroText element="p" variant="b1" content={transformLangText(intro, 180)} />
      )}
    </StyledCard>
  );
};

export default BlogCard;
