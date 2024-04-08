import { CreditApplicationForm } from './types.ts'

export interface ResultResponse {
    id: string
    probability: number
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
