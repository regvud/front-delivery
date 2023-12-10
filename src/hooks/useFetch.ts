import { useQuery } from '@tanstack/react-query';

export const useFetch = <T>(queryFn: Promise<T>, queryKey: string[]) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => queryFn,
    queryKey: queryKey,
  });

  
  return { data, error, isLoading };
};