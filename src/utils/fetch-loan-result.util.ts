import {
    CheckingAccountStatus,
    CreditApplicationForm,
    CreditHistory,
    EmploymentDuration,
    ForeignWorker,
    Housing,
    InstallmentPlans,
    Job,
    OtherDebtors,
    PersonalStatus,
    Property,
    Purpose,
    SavingsAccount,
    Telephone,
} from './types.ts'

export interface ResultResponse {
    id: string
    probability: number
    checking_account_status: CheckingAccountStatus
    duration_in_months: number
    credit_history: CreditHistory
    purpose: Purpose
    credit_amount: number
    savings_account: SavingsAccount
    employment_duration: EmploymentDuration
    installment_rate: number
    personal_status: PersonalStatus
    other_debtors: OtherDebtors
    present_residence_since: number
    property: Property
    age: number
    other_installment_plans: InstallmentPlans
    housing: Housing
    number_of_existing_credits: number
    job: Job
    number_of_people_liable_for_maintenance: number
    telephone: Telephone
    foreign_worker: ForeignWorker
}

export const fetchNewLoanResult = async (payload: CreditApplicationForm) => {
    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data: ResultResponse = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const fetchAllLoanResults = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/results', {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data: ResultResponse[] = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const fetchLoanResult = async (resultId: string) => {
    try {
        const response = await fetch(
            `http://127.0.0.1:5000/results/${resultId}`,
            {
                method: 'GET',
            }
        )
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data: ResultResponse = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
