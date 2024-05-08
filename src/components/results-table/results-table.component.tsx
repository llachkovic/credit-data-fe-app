import { useResultsTable } from './results-table.hook.tsx'
import { useResultListQuery } from '../../hooks/result-list-query.hook.ts'
import { Alert, Col, Row, Table } from 'antd'
import React from 'react'

export const ResultsTable: React.FC = () => {
    const { columns, rowProps, createDataWithResultTag } = useResultsTable()
    const { data, isFetching, isError } = useResultListQuery()

    if (isError) {
        return (
            <Row>
                <Col>
                    <Alert
                        showIcon
                        type="error"
                        message="Loading Error"
                        description="Result list could not be loaded at the moment. Try again later."
                    />
                </Col>
            </Row>
        )
    }

    return (
        <Table
            columns={columns}
            onRow={rowProps}
            dataSource={createDataWithResultTag(data)}
            loading={isFetching}
        />
    )
}
