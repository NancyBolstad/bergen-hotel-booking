import React from 'react';
import { useParams } from 'react-router-dom';
import PlainBanner from '../../components/Banner/PlainBanner';
import useApi from '../../hooks/useApi';
import { BlogList as BlogListTypes } from '../../types/response';
import Loader from '../../components/Loader/Loader';
import usePagination from '../../hooks/usePagination';
import PaginateButtons from '../../components/Button/PaginateButtons';
import { BLOG_LIST_SIZE } from '../../util/constants';
import BlogList from '../../components/Blog/BlogList';

const Blog: React.FunctionComponent = () => {
  const { results, loading } = useApi<BlogListTypes>({
    endpoint: `${process.env.REACT_APP_API_URL}blog`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [],
    },
  });
  const { number = '1' } = useParams();
  const maxPage = Math.ceil(results.data.length / BLOG_LIST_SIZE);
  const currentPage = parseInt(number) <= maxPage && parseInt(number) > 0 ? parseInt(number) : 1;
  const { next, prev, jump, currentData } = usePagination(
    results.data,
    BLOG_LIST_SIZE,
    currentPage,
    maxPage,
  );
  return (
    <>
      <PlainBanner title="Welcome to our blog" isTitleColorRed />
      {loading ? (
        <Loader />
      ) : (
        <>
          <BlogList list={currentData()} />
          <PaginateButtons
            totalPages={maxPage}
            preHandler={prev}
            nextHandler={next}
            jumpHandler={jump}
            displayNext={currentPage < maxPage}
            displayPrev={currentPage > 1}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default Blog;
