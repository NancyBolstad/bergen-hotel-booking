import * as React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { BlogDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { Flex } from '../../components/Layout/';
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
  const history = useHistory();
  let { id } = useParams();
  const { results, loading, error } = useApi<BlogDetailsRoot>({
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

  React.useEffect(() => {
    if (error) {
      history.push('/404');
    }
  }, [history, error]);

  return (
    <>
      {loading && <Loader />}
      {!!results && !loading && (
        <PageHero figure={results.data.images[0]}>
          <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints size="medium">
                <Flex direction="column" align="flex-start">
                  <Typography
                    variant="h1"
                    element="h1"
                    content={results.data.title}
                    textTransform="capitalize"
                  />
                  {results.data.content && (
                    <RichText dangerouslySetInnerHTML={{ __html: results.data.content }} />
                  )}
                  {results.data.author && (
                    <Typography
                      variant="b1"
                      element="span"
                      content={`Author: ${results.data.author}`}
                    />
                  )}
                  {results.data.createdAt && (
                    <Typography
                      variant="b1"
                      element="span"
                      content={`Published at: ${results.data.createdAt}`}
                    />
                  )}
                </Flex>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
        </PageHero>
      )}
      {!localContext.loading && localContext.default && (
        <HotelCardsList
          sectionTitle={`Related Accommodations`}
          ctaText={`Explore more accommodations`}
          ctaUrl={`/accommodations?name=&category=&service=`}
          list={[...localContext.default]
            .filter(element => {
              return element.name.includes(results.data.title.charAt(0));
            })
            .slice(0, 4)}
        />
      )}
    </>
  );
};

export default BlogDetails;
