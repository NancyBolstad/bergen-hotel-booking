import * as React from 'react';
import { Section, Wrapper, SectionTitle, More } from './styles';
import BlogCard, { Props as Card } from './BlogCard';
import { ButtonInternal } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, CardsList } from '../Layout';

export interface Props {
  sectionTitle?: string;
  backgroundColor?: keyof IColors;
  ctaText?: string;
  ctaUrl?: string;
  list?: Card[];
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
              <CardsList>
                {list.map((blog, index) => (
                  <BlogCard
                    key={`blog-card${index}-${blog.id}`}
                    id={blog.id}
                    title={blog.title}
                    intro={blog.intro}
                    image={blog.image}
                  />
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

export default BlogList;
