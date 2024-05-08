import React from 'react'
import { ResultsTable } from '../../components/results-table/results-table.component.tsx'
import { Row, Typography } from 'antd'

const ListPage: React.FC = () => {
    return (
        <>
            <Row>
                <Typography.Title level={2}>Results</Typography.Title>
            </Row>
            <ResultsTable />
        </>
    )
}

export default ListPage
