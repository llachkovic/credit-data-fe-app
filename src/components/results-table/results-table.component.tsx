import { useResultsTable } from './results-table.hook.ts'
import { useResultListQuery } from '../../hooks/result-list-query.hook.ts'
import { Table } from 'antd'

export const ResultsTable = () => {
    const { columns, rowProps } = useResultsTable()
    const { data, isFetching } = useResultListQuery()

    return (
        <Table
            columns={columns}
            onRow={rowProps}
            dataSource={data}
            loading={isFetching}
        />
    )
}
