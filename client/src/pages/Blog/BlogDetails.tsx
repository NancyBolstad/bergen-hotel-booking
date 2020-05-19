import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader';
import { BlogDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { Flex } from '../../components/Flex';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';

interface Props {}

export const RichText = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.colors.onBackground};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  white-space: pre-wrap;
  p {
    margin: ${props => props.theme.spacing.s}rem auto;
  }

  @media screen and (min-width: 1280px) {
    p {
      margin: ${props => props.theme.spacing.m}rem auto;
    }
  }
`;

export const BlogDetails: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  let { id } = useParams();
  const { data, loading } = useApi<BlogDetailsRoot>({
    endpoint: `${process.env.REACT_APP_API_URL}blog/${id}`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: {
        id: '',
        title: '',
        images: [],
      },
    },
  });

  return (
    <>
      {loading && <Loader />}
      {!!data && !loading && (
        <PageHero figure={data.data.images[0]}>
          <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints size="medium">
                <Flex direction="column" align="flex-start">
                  <Typography
                    variant="h1"
                    element="h1"
                    content={data.data.title}
                    textTransform="capitalize"
                  />
                  {data.data.author && (
                    <Typography
                      variant="b3"
                      element="span"
                      content={`Author: ${data.data.author}`}
                      bottom={20}
                    />
                  )}
                  {data.data.createdAt && (
                    <Typography
                      variant="b3"
                      element="span"
                      content={`Published at: ${data.data.createdAt}`}
                    />
                  )}
                  {data.data.content && (
                    <RichText dangerouslySetInnerHTML={{ __html: data.data.content }} />
                  )}
                </Flex>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
        </PageHero>
      )}
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="Related accommodations"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 3)}
          backgroundColor="secondaryVariant"
        />
      )}
    </>
  );
};

export default BlogDetails;