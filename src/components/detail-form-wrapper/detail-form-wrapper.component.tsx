import { Col, Row, Typography } from 'antd'
import { FormProvider } from 'react-hook-form'
import { InputForm } from '../input-form/input-form-component.tsx'
import React from 'react'
import { useDetailFormWrapper } from './detail-form-wrapper.hook.ts'
import { ResultResponse } from '../../utils/fetch-loan-result.util.ts'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routing/route-names.ts'

interface DetailFormWrapperProps {
    data: ResultResponse
}

export const DetailFormWrapper: React.FC<DetailFormWrapperProps> = ({
    data,
}) => {
    const { form } = useDetailFormWrapper(data)
    const navigate = useNavigate()

    return (
        <>
            <Row justify={'space-between'}>
                <Col span={12} style={{ textAlign: 'left' }}>
                    <Typography.Title level={2}>
                        <ArrowLeftOutlined
                            style={{ marginRight: '20px' }}
                            onClick={() => navigate(RouteNames.list)}
                        />
                        Result #{data.id} ({data.email})
                    </Typography.Title>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    <Typography.Title
                        level={3}
                        type={
                            data.probability < 0.5
                                ? 'danger'
                                : data.probability < 0.75
                                  ? 'warning'
                                  : 'success'
                        }
                    >
                        Probability of Approval:{' '}
                        {(data.probability * 100).toFixed(2)}%
                    </Typography.Title>
                </Col>
            </Row>
            <FormProvider {...form}>
                <InputForm control={form.control} readonly />
            </FormProvider>
        </>
    )
}
