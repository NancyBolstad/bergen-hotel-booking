import * as React from 'react';
import {
  Section,
  Wrapper,
  BlogCard,
  BlogImage,
  BlogTitle,
  BlogIntroText,
  SectionTitle,
  More,
} from './styles';
import { ButtonInternal } from '../Button';
import { Image } from '../../types/types';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, CardsList } from '../Layout';
import transformLangText from '../../util/transformLangText';

export interface Item {
  id?: string;
  title?: string;
  intro?: string;
  content?: string;
  author?: string;
  category?: string;
  image?: Image;
}

export interface Props {
  sectionTitle?: string;
  backgroundColor?: keyof IColors;
  ctaText?: string;
  ctaUrl?: string;
  list?: Item[];
}

export const Blog: React.FunctionComponent<Props> = ({
  sectionTitle,
  ctaText,
  ctaUrl,
  list,
  backgroundColor,
}) => {
  if (!list) return null;

  return (
    <Section backgroundColor={backgroundColor}>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Wrapper>
              {!!sectionTitle && <SectionTitle element="h2" variant="h2" content={sectionTitle} />}
              <CardsList>
                {list.map((blog, index) => (
                  <BlogCard
                    key={`blog-card-${index}`}
                    to={`/blog/${blog.id}`}
                    title={blog.title}
                    aria-label={`Go to ${blog.title}`}
                  >
                    {!!blog.image && <BlogImage src={blog.image.url} alt={blog.image.alt} />}
                    {!!blog.title && <BlogTitle element="h3" variant="h3" content={blog.title} />}
                    {!!blog.intro && (
                      <BlogIntroText
                        element="p"
                        variant="b3"
                        content={transformLangText(blog.intro, 180)}
                      />
                    )}
                  </BlogCard>
                ))}
              </CardsList>
              {!!ctaText && !!ctaUrl && (
                <More>
                  <ButtonInternal to={ctaUrl} size="medium" variant="secondary">
                    {ctaText}
                  </ButtonInternal>
                </More>
              )}
            </Wrapper>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default Blog;
