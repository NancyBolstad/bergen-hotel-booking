import { useState, useEffect } from 'react';
import { API_ERROR_MESSAGE } from './../util/constants';

interface Config<T> {
  endpoint: string;
  queryParams?: string;
  initialData: T;
  fetchOnMount?: boolean;
}

interface ApiResponseData<T> {
  results: T;
  loading: boolean;
  error: string;
}

function useApi<T>(config: Config<T>): ApiResponseData<T> {
  const [results, setResults] = useState(config.initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    setLoading(true);

    try {
      const url = config.queryParams
        ? `${config.endpoint}/${config.queryParams}`
        : `${config.endpoint}`;

      const response = await fetch(url);

      if (response.status === 404) {
        throw new Error(API_ERROR_MESSAGE.notFound);
      } else if (response.status === 500) {
        throw new Error(API_ERROR_MESSAGE.serverProblem);
      }

      const data = await response.json();

      setLoading(false);
      setResults(data as T);
    } catch (error) {
      setLoading(false);
      setError(API_ERROR_MESSAGE.default);
    }
  }

  useEffect(() => {
    if (config.fetchOnMount) {
      fetchData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    results,
    loading,
    error,
  };
}

export default useApi;
