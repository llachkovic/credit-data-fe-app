import { useResultQuery } from '../../hooks/result-query.hook.ts'
import { useParams } from 'react-router-dom'
import { Alert, Col, Row, Spin } from 'antd'
import React from 'react'
import { DetailFormWrapper } from '../../components/detail-form-wrapper/detail-form-wrapper.component.tsx'

const ResultPage: React.FC = () => {
    const { resultId } = useParams<{ resultId?: string }>()
    const { data, isFetching, isError } = useResultQuery(resultId)

    if (isFetching) {
        return (
            <Row>
                <Col>
                    <Spin size="large" />
                </Col>
            </Row>
        )
    }
    if (isError) {
        return (
            <Row>
                <Col>
                    <Alert
                        showIcon
                        type="error"
                        message="Loading Error"
                        description="Prediction detail could not be loaded at the moment. Try again later."
                    />
                </Col>
            </Row>
        )
    }
    if (data) {
        return <DetailFormWrapper data={data} />
    }
    return null
}

export default ResultPage
