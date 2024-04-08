import { useResultQuery } from '../../hooks/result-query.hook.ts'
import { useParams } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { ResultsTable } from '../../components/results-table/results-table.component.tsx'
import React from 'react'

const ResultPage: React.FC = () => {
    const { resultId } = useParams<{ resultId?: string }>()
    const { data } = useResultQuery(resultId)

    return (
        <Space direction="vertical">
            <Typography>The probability is {data?.probability}</Typography>
            <ResultsTable />
        </Space>
    )
}

export default ResultPage
