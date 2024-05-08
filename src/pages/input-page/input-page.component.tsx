import { InputForm } from '../../components/input-form/input-form-component.tsx'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { useInputPage } from './input-page.hook.ts'
import { Button, Row, Typography } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

const InputPage: React.FC = () => {
    const { form, handleSubmit, handleSave } = useInputPage()
    return (
        <>
            <Row justify={'space-between'}>
                <Typography.Title level={2}>
                    Predict Loan Approval
                </Typography.Title>
            </Row>
            <FormProvider {...form}>
                <InputForm control={form.control} />
                <Row justify="end">
                    <Button
                        icon={<CodeOutlined />}
                        size="large"
                        type="primary"
                        onClick={handleSubmit(handleSave)}
                        disabled={!form.formState.isValid}
                        loading={form.formState.isSubmitting}
                    >
                        Submit
                    </Button>
                </Row>
            </FormProvider>
        </>
    )
}
export default InputPage
