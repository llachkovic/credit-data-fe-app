import { useQuery } from 'react-query'
import {
    fetchAllLoanResults,
    ResultResponse,
} from '../utils/fetch-loan-result.util.ts'
import { QueryKeys } from '../constants/query-keys.ts'

export const useResultListQuery = (): ReturnType<
    typeof useQuery<ResultResponse[]>
> => {
    return useQuery({
        queryKey: [QueryKeys.GET_ALL_RESULTS],
        queryFn: () => fetchAllLoanResults(),
    })
}
