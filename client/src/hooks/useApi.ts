import { useState, useEffect } from 'react';

interface Opts<T> {
  endpoint: string;
  queryParams?: string;
  initialData: T;
  fetchOnMount?: boolean;
}

interface UseApiInterface<T> {
  results: T;
  loading: boolean;
  hasFetched: boolean;
  error: string;
}

function useApi<T>(opts: Opts<T>): UseApiInterface<T> {
  const [results, setResults] = useState(opts.initialData);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function fetchData() {
    setLoading(true);
    setHasFetched(true);

    try {
      const url = opts.queryParams ? `${opts.endpoint}/${opts.queryParams}` : `${opts.endpoint}`;

      const response = await fetch(url);
      if (response.status === 404) {
        throw new Error('Page Not Found');
      } else if (response.status === 500) {
        throw new Error('Internal Server Error');
      }

      const data = await response.json();

      setLoading(false);
      setResults(data as T);
    } catch (error) {
      setLoading(false);
      setError('Something went wrong with the API service.');
    }
  }

  useEffect(() => {
    if (opts.fetchOnMount) {
      fetchData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    results,
    loading,
    hasFetched,
    error,
  };
}

export default useApi;
