import React, { lazy, Suspense } from 'react';
import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { HotelDetails, HotelCategories, HotelServices } from '../../types/response';
import createMediaQuery from '../../util/createMediaQuery';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { HotelCardVariant } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { MockHotels, MockCategories, MockServices } from '../../mocks/data';
import MainContent from '../../components/MainContent';
import { PlainBanner } from '../../components/Banner';
import { solidArrow } from '../../util/icons';
import BlogList from '../../components/Blog';
import useApi from '../../hooks/useApi';
import { BlogList as BlogListTypes } from '../../types/response';
import Loader from '../../components/Loader';

interface Props {}

const Blog: React.FunctionComponent<Props> = ({}) => {
  const { data, loading } = useApi<BlogListTypes>({
    endpoint: `${process.env.REACT_APP_API_URL}blog`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [],
    },
  });
  return (
    <>
      <PlainBanner
        title="Welcome to our blog"
        text="Stay updated with the latest travel stories, tips and insights shared by our community."
        isTitleColorRed
      />
      <MainContent>
        <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
          <HorizontalSpacer>
            <WidthConstraints size="large">
              {loading ? <Loader /> : <BlogList list={data.data} />}
            </WidthConstraints>
          </HorizontalSpacer>
        </VerticalSpacer>
      </MainContent>
    </>
  );
};

export default Blog;
