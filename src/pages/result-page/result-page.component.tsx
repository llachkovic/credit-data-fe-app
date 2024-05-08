import { useResultQuery } from '../../hooks/result-query.hook.ts'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import React from 'react'
import { DetailFormWrapper } from '../../components/detail-form-wrapper/detail-form-wrapper.component.tsx'

const ResultPage: React.FC = () => {
    const { resultId } = useParams<{ resultId?: string }>()
    const { data, isFetching } = useResultQuery(resultId)

    if (isFetching) {
        return <Spin />
    }
    if (data) {
        return <DetailFormWrapper data={data} />
    }
    return null
}

export default ResultPage
