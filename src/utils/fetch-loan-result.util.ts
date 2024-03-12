import { CreditApplicationForm } from './types.ts'

export const fetchLoanResult = async (payload: CreditApplicationForm) => {
    try {
        const response = await fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data: number = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
