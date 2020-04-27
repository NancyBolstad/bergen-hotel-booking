import { useState, useEffect } from 'react';

interface Opts<T> {
  endpoint: string;
  queryParams?: string;
  initialData: T;
  fetchOnMount?: boolean;
}

interface UseApiInterface<T> {
  data: T;
  loading: boolean;
  hasFetched: boolean;
}

function useApi<T>(opts: Opts<T>): UseApiInterface<T> {
  const [data, setData] = useState(opts.initialData);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    setHasFetched(true);

    try {
      const url = opts.queryParams ? `${opts.endpoint}/${opts.queryParams}` : `${opts.endpoint}`;

      const response = await fetch(url);
      if (response.status === 404) {
        throw new Error('pageNotFound');
      } else if (response.status === 500) {
        throw new Error('internalServerError');
      }

      const data = await response.json();

      setLoading(false);
      setData(data as T);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    if (opts.fetchOnMount) {
      fetchData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    data,
    loading,
    hasFetched,
  };
}

export default useApi;
