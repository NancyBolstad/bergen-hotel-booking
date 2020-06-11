import * as React from 'react';
import { Wrapper, SectionTitle, More } from './styles';
import BlogCard from './BlogCard';
import { Blog } from '../../types/response';
import { ButtonLink } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, CardsList, Section } from '../Layout';

export interface Props {
  sectionTitle?: string;
  backgroundColor?: keyof IColors;
  ctaText?: string;
  ctaUrl?: string;
  list?: Blog[];
}

export const BlogList: React.FunctionComponent<Props> = ({
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
              <CardsList isEven={list.length % 2 === 0}>
                {list.map((blog, index) => (
                  <BlogCard
                    key={`blog-card${index}-${blog.id}`}
                    id={blog.id}
                    title={blog.title}
                    intro={blog.intro}
                    images={blog.images}
                    author={blog.author}
                    createdAt={blog.createdAt}
                  />
                ))}
              </CardsList>
              {!!ctaText && !!ctaUrl && (
                <More>
                  <ButtonLink
                    href={ctaUrl}
                    size="medium"
                    variant="secondary"
                    aria-label={ctaText}
                    title={ctaText}
                  >
                    {ctaText}
                  </ButtonLink>
                </More>
              )}
            </Wrapper>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default BlogList;
