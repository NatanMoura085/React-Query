// hooks/useQueryData.js
import { useQuery } from 'react-query';
import { fetchData } from '../../service/index';

export function useQueryData<TData>(url: string, queryKey: string) {
  return useQuery<TData, Error>(queryKey, () => fetchData<TData>(url));
}
