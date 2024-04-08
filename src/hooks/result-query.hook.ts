import { useQuery } from 'react-query'
import {
    fetchLoanResult,
    ResultResponse,
} from '../utils/fetch-loan-result.util.ts'
import { QueryKeys } from '../constants/query-keys.ts'

export const useResultQuery = (
    resultId?: string
): ReturnType<typeof useQuery<ResultResponse>> => {
    return useQuery({
        queryKey: [QueryKeys.GET_RESULT, resultId],
        queryFn: () => fetchLoanResult(resultId!),
        enabled: !!resultId,
    })
}
