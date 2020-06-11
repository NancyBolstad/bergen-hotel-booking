import * as React from 'react';
import PlainBanner from '../../components/Banner/PlainBanner';
import FlexBanner from '../../components/Banner/FlexBanner';
import useApi from '../../hooks/useApi';
import { BlogList as BlogListTypes } from '../../types/response';
import BlogList from '../../components/Blog/BlogList';
import Loader from '../../components/Loader/Loader';

interface Props {}

const image = {
  url:
    'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589114470/holidaza/photo-1580946443359-1126222f9224_fjvl7g.jpg',
  alt: 'Bergen scenery',
};

const mockFlexBannerAboutUsA = {
  title: 'Who are we',
  descriptions:
    'Our workers are down-to-earth, trustworthy and reliable. With us you can focus on enjoying the stay, and rest assured that your booked hotel will fullfil your expectations.',
  figure: image,
  buttonText: 'Explore our services',
  redirectLink: '/accommodations?category=&name=&service=',
};

const mockFlexBannerAboutUsB = {
  title: 'Our Stories',
  descriptions:
    'Stay updated with the latest travel stories, tips and insights shared by our community.',
  figure: image,
  buttonText: 'Read our stories',
  redirectLink: '/accommodations?category=&name=&service=',
};

export const About: React.FunctionComponent<Props> = () => {
  const { results, loading } = useApi<BlogListTypes>({
    endpoint: `${process.env.REACT_APP_API_URL}blog`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [],
    },
  });

  return (
    <>
      <PlainBanner title="About" isTitleColorRed />
      <FlexBanner {...mockFlexBannerAboutUsA} />
      {loading ? <Loader /> : <BlogList list={results.data.reverse().slice(0, 3)} />}
      <FlexBanner {...mockFlexBannerAboutUsB} isImageRight />
      {loading ? <Loader /> : <BlogList list={results.data.reverse().slice(10, 13)} />}
    </>
  );
};

export default About;
