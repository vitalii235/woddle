import {QueryKey, UseQueryOptions} from '@tanstack/react-query';

export interface ErrorResponse {
  message: string;
  status: number;
  errors?: { [key: string]: string | string[] };
}

export type QueryOptions<
  TQueryFnData,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = string[],
> = Omit<
  UseQueryOptions<TQueryFnData, ErrorResponse, TData, TQueryKey>,
  'queryKey' | 'queryFn' | 'initialData'
>;
