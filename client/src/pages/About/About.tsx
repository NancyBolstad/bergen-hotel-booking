import * as React from 'react';
import PlainBanner from '../../components/Banner/PlainBanner';
import FlexBanner from '../../components/Banner/FlexBanner';
import useApi from '../../hooks/useApi';
import { BlogList as BlogListTypes } from '../../types/response';
import BlogList from '../../components/Blog/BlogList';
import Loader from '../../components/Loader/Loader';
import { ABOUT_A, ABOUT_B, API_ENDPOINT } from '../../util/constants';

interface Props {}

export const About: React.FunctionComponent<Props> = () => {
  const { results, loading } = useApi<BlogListTypes>({
    url: `${process.env.REACT_APP_API_URL}${API_ENDPOINT.blog}`,
    initialData: {
      code: 0,
      data: [],
    },
  });

  return (
    <>
      <PlainBanner title="About" isTitleColorRed />
      <FlexBanner {...ABOUT_A} />
      {loading ? <Loader /> : <BlogList list={results.data.reverse().slice(0, 3)} />}
      <FlexBanner {...ABOUT_B} isImageRight />
      {loading ? <Loader /> : <BlogList list={results.data.reverse().slice(10, 13)} />}
    </>
  );
};

export default About;
