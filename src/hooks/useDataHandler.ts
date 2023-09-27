// hooks/useDataHandler.js
import { useQueryData } from './useQueryData';

export function useDataHandler<TData>(url: string, queryKey: string) {
    const { data, isLoading, isError } = useQueryData<TData>(url, queryKey);

    if (isLoading) {

        return { isLoading: true };
    }

    if (isError) {

        return { isError: true };
    }



    return { data };
}
