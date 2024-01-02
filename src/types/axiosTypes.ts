export type PaginatedResponse<T> = {
  total_pages: number;
  next: boolean;
  prev: boolean;
  results: T;
};
