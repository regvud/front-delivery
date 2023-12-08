import { QueryFunction, useQuery } from '@tanstack/react-query';

// export const useFetch = (
//   queryFn: QueryFunction<Promise<T>>,
//   queryKey: string[]
// ) => {
//   const { data, error, isLoading } = useQuery({
//     queryFn: () => queryFn,
//     queryKey: queryKey,
//   });

//   return { data, error, isLoading };
// };