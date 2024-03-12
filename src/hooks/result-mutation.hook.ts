import { useMutation } from 'react-query'
import { fetchLoanResult } from '../utils/fetch-loan-result.util.ts'
import { CreditApplicationForm } from '../utils/types.ts'

export const useModelResultMutation = () => {
    const { mutateAsync } = useMutation({
        mutationFn: (value: CreditApplicationForm) => fetchLoanResult(value),
        onSuccess: () => console.log('success'),
        onError: () => console.error('error'),
    })

    const getResult = async (value: CreditApplicationForm) => {
        await mutateAsync(value)
    }

    return { getResult }
}
