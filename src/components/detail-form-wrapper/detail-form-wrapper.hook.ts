import { useForm } from 'react-hook-form'
import { CreditApplicationForm } from '../../utils/types.ts'
import { ResultResponse } from '../../utils/fetch-loan-result.util.ts'

export const useDetailFormWrapper = (data: ResultResponse) => {
    const form = useForm<CreditApplicationForm>({
        mode: 'all',
        defaultValues: {
            age: data.age,
            checkingAccountStatus: data.checking_account_status,
            creditAmount: data.credit_amount,
            creditHistory: data.credit_history,
            durationInMonths: data.duration_in_months,
            employmentDuration: data.employment_duration,
            foreignWorker: data.foreign_worker,
            housing: data.housing,
            installmentRate: data.installment_rate,
            job: data.job,
            numberOfExistingCredits: data.number_of_existing_credits,
            numberOfPeopleLiableForMaintenance:
                data.number_of_people_liable_for_maintenance,
            otherDebtors: data.other_debtors,
            otherInstallmentPlans: data.other_installment_plans,
            personalStatus: data.personal_status,
            presentResidenceSince: data.present_residence_since,
            property: data.property,
            purpose: data.purpose,
            savingsAccount: data.savings_account,
            telephone: data.telephone,
        },
    })

    return { form }
}
