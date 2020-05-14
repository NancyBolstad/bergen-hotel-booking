import { useHistory } from 'react-router-dom';
import { Blog } from '../types/response';

function usePagination(data: Blog[], itemsPerPage: number, currentPage: number, maxPage: number) {
  const history = useHistory();
  function currentData(): Blog[] {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function updatePage(pageNumber: number) {
    history.push(`/blog/page/${pageNumber <= maxPage ? pageNumber : 1}`);
  }

  function next(): void {
    const newPage: number = Math.min(currentPage + 1, maxPage);
    updatePage(newPage);
  }

  function prev(): void {
    const newPage = Math.max(currentPage - 1, 1);
    updatePage(newPage);
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);

    updatePage(Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData };
}

export default usePagination;
