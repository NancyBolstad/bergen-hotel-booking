import * as React from 'react';
import { PlainBanner } from '../../components/Banner';
import { FlexBanner } from '../../components/Banner/';
import { ImageGrid } from '../../components/Image';
import { createList } from '../../util/mockHelpers';

interface Props {}

const image = {
  url:
    'https://res.cloudinary.com/dykdxdtuu/image/upload/v1589114470/holidaza/photo-1580946443359-1126222f9224_fjvl7g.jpg',
  alt: 'Bergen scenery',
};

const mockFlexBannerBlog = {
  title: 'Stories from Bergen',
  descriptions:
    'Stay updated with the latest travel stories, tips and insights shared by our community.',
  figure: image,
  buttonText: 'Read our blog',
  redirectLink: '/blog',
};

const mockFlexBannerAboutUs = {
  title: 'Why should you booking with us',
  descriptions:
    'We are the customers’ local friends. We help them to find the best accommodation at the best price. Our workers are down-to-earth, trustworthy and reliable. Our hotel booking services are seamless, easy, and reliable. With us you can focus on enjoying the stay, and rest assured that your booked hotel will fullfil your expectations. ',
  figure: image,
  buttonText: 'Explore our accommodations',
  redirectLink: '/accommodations?category=&name=&service=',
};

export const About: React.FunctionComponent<Props> = () => {
  return (
    <>
      <PlainBanner
        title="About"
        text="We are your local friends in Bergen. Let us help you to find the best accommodation at the best price."
      />
      <FlexBanner {...mockFlexBannerAboutUs} isImageRight />
      <FlexBanner {...mockFlexBannerBlog} />
      <FlexBanner {...mockFlexBannerAboutUs} isImageRight />
      <ImageGrid images={createList(image, 10)} />
    </>
  );
};

export default About;
