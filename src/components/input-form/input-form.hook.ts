import { useForm } from 'react-hook-form'
import { CreditApplicationForm } from '../../utils/types.ts'
import { useModelResultMutation } from '../../hooks/result-mutation.hook.ts'
import { useCallback } from 'react'

export const useInputForm = () => {
    const { getResult } = useModelResultMutation()
    const form = useForm<CreditApplicationForm>({ mode: 'all' })

    const { handleSubmit } = form

    const handleSave = useCallback(
        async (payload: CreditApplicationForm) => {
            await getResult(payload)
        },
        [getResult]
    )

    return { form, handleSubmit, handleSave }
}
