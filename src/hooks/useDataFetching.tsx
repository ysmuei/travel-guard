import { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

interface DataFetchingProps<T> {
  queryKey: string;
  fetchFunction: () => Promise<T>;
  filterFunction: (data: T, searchQuery: string) => T;
}

function useDataFetching<T>({ queryKey, fetchFunction, filterFunction }: DataFetchingProps<T>) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data, isLoading, error } = useQuery<T, Error>({
    queryKey: [queryKey],
    queryFn: fetchFunction,
    staleTime: 1000 * 60 * 60 * 6, // 6시간
    gcTime: 1000 * 60 * 60 * 6,
  });

  const handleInputChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return filterFunction(data, searchQuery);
  }, [data, searchQuery, filterFunction]);

  return {
    data: filteredData,
    isLoading,
    error,
    searchQuery,
    handleInputChange,
  };
}

export default useDataFetching;