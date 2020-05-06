import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Props as BlogCardProps } from './BlogCard';
import { Props } from './BlogList';
import BlogList from './';
import { mockImageObject, createList } from '../../util/mockHelpers';

const mockBlog: BlogCardProps = {
  id: '556-05-7989',
  title: 'a libero nam',
  intro:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  content:
    'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  author: 'Frederich Aires',
  category: 'framework',
  image: mockImageObject,
};

const mockList: Props = {
  sectionTitle: 'Blog',
  backgroundColor: 'secondary',
  ctaText: 'Read more blogs',
  ctaUrl: '/blog',
  list: createList(mockBlog, 5),
};

export const BlogListStory = <BlogList {...mockList} />;

storiesOf('Component/Blog', module).add('Default', () => BlogListStory);
