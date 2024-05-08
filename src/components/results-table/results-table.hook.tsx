import { TableProps } from 'antd'
import { ResultResponse } from '../../utils/fetch-loan-result.util.ts'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routing/route-names.ts'
import { StatusTag, TagValues } from '../status-tag/status-tag.component.tsx'

export const useResultsTable = () => {
    const navigate = useNavigate()
    const columns: TableProps<ResultResponse & { tag: TagValues }>['columns'] =
        [
            { title: 'Result ID', dataIndex: 'id', key: 'id' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            {
                title: 'Probability',
                dataIndex: 'probability',
                key: 'probability',
                render: (value: number) => `${(value * 100).toFixed(2)}%`,
            },
            {
                title: 'Result Tag',
                dataIndex: 'tag',
                key: 'tag',
                render: (value: TagValues) => <StatusTag value={value} />,
            },
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

    const createDataWithResultTag = (data?: ResultResponse[]) => {
        return data?.map((item) => {
            return {
                ...item,
                tag: (item.probability < 0.5
                    ? 'REJECTED'
                    : item.probability < 0.75
                      ? 'PENDING'
                      : 'APPROVED') as TagValues,
            }
        })
    }

    return { columns, rowProps, createDataWithResultTag }
}