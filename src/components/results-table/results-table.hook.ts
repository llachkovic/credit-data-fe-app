import { TableProps } from 'antd'
import { ResultResponse } from '../../utils/fetch-loan-result.util.ts'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routing/route-names.ts'

export const useResultsTable = () => {
    const navigate = useNavigate()
    const columns: TableProps<ResultResponse>['columns'] = [
        { title: 'Result ID', dataIndex: 'id', key: 'id' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Probability', dataIndex: 'probability', key: 'probability' },
    ]

    const handleRowClick = (record: ResultResponse) => {
        // Redirect user to a new page using the row key
        navigate(RouteNames.resultUrl(record.id))
    }

    const rowProps = (record: ResultResponse) => ({
        onClick: () => {
            handleRowClick(record)
        },
    })

    return { columns, rowProps }
}
