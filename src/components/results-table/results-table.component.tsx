import { useResultsTable } from './results-table.hook.tsx'
import { useResultListQuery } from '../../hooks/result-list-query.hook.ts'
import { Table } from 'antd'

export const ResultsTable = () => {
    const { columns, rowProps, createDataWithResultTag } = useResultsTable()
    const { data, isFetching } = useResultListQuery()

    return (
        <Table
            columns={columns}
            onRow={rowProps}
            dataSource={createDataWithResultTag(data)}
            loading={isFetching}
        />
    )
}
