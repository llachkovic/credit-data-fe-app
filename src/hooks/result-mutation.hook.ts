import { useMutation, useQueryClient } from 'react-query'
import { fetchNewLoanResult } from '../utils/fetch-loan-result.util.ts'
import { CreditApplicationForm } from '../utils/types.ts'
import { QueryKeys } from '../constants/query-keys.ts'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routing/route-names.ts'
import { notification } from 'antd'

export const useModelResultMutation = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutateAsync, ...rest } = useMutation({
        mutationFn: (value: CreditApplicationForm) => fetchNewLoanResult(value),
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({
                predicate: (query) =>
                    query.queryKey[0] === QueryKeys.GET_ALL_RESULTS,
            })
            navigate(RouteNames.resultUrl(data!.id))
            notification.success({
                message: 'Prediction successfully computed!',
            })
        },
        onError: () => notification.error({ message: 'An error occurred.' }),
    })

    return { getResult: mutateAsync, ...rest }
}
