import React from 'react'
import { Col, InputNumber, Row, Select, Typography } from 'antd'
import { ControlledFormElement } from '../controlled-form-element/controlled-form-element.component.tsx'
import {
    CheckingAccountStatus,
    CreditApplicationForm,
    CreditHistory,
    EmploymentDuration,
    ForeignWorker,
    Housing,
    InstallmentPlans,
    Job,
    OtherDebtors,
    PersonalStatus,
    Property,
    Purpose,
    SavingsAccount,
    Telephone,
} from '../../utils/types.ts'
import { Control } from 'react-hook-form'

interface InputFormProps {
    readonly?: boolean
    control: Control<CreditApplicationForm>
}

export const InputForm: React.FC<InputFormProps> = ({ readonly, control }) => {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Typography.Title level={5}>
                        Credit History
                    </Typography.Title>
                </Row>
                <Row gutter={[16, 32]}>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="checkingAccountStatus"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(
                                        CheckingAccountStatus
                                    ).map(([key, value]) => ({
                                        label: value,
                                        value: key,
                                    }))}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Checking Account Status' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="savingsAccount"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(SavingsAccount).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Savings Account' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="creditHistory"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(CreditHistory).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Credit History' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Typography.Title level={5}>Loan</Typography.Title>
                </Row>
                <Row gutter={[16, 32]}>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="creditAmount"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    step={100}
                                    min={0}
                                    addonAfter="EUR"
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Credit Amount' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="durationInMonths"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    addonAfter="months"
                                    min={1}
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Duration in Months' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="installmentRate"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    formatter={(value) => `${value}%`}
                                    parser={(value) => value!.replace('%', '')}
                                    min={0}
                                    max={100}
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Installment Rate' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="purpose"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(Purpose).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Purpose' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Typography.Title level={5}>Applicant</Typography.Title>
                </Row>
                <Row gutter={[16, 32]}>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="age"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    min={18}
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Age' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="personalStatus"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(PersonalStatus).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Personal Status' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="employmentDuration"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(
                                        EmploymentDuration
                                    ).map(([key, value]) => ({
                                        label: value,
                                        value: key,
                                    }))}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Employment Duration' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="property"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(Property).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Property' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="presentResidenceSince"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    min={1}
                                    addonAfter="months"
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Present Residence Since' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="housing"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(Housing).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Housing' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="job"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(Job).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Job' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="foreignWorker"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(ForeignWorker).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Foreign Worker' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Typography.Title level={5}>Liabilities</Typography.Title>
                </Row>
                <Row gutter={[16, 32]}>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="numberOfExistingCredits"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    min={0}
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{
                                label: 'Number of Existing Credits',
                            }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="otherInstallmentPlans"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(
                                        InstallmentPlans
                                    ).map(([key, value]) => ({
                                        label: value,
                                        value: key,
                                    }))}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Other Installment Plans' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="otherDebtors"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(OtherDebtors).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Other Debtors' }}
                        />
                    </Col>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="numberOfPeopleLiableForMaintenance"
                            render={(field) => (
                                <InputNumber
                                    {...field}
                                    disabled={readonly}
                                    min={0}
                                    style={{ width: '100%' }}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{
                                label: 'Number of People Liable for Maintenance',
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Typography.Title level={5}>Contact</Typography.Title>
                </Row>
                <Row gutter={[16, 32]}>
                    <Col span={6}>
                        <ControlledFormElement
                            control={control}
                            name="telephone"
                            render={(field) => (
                                <Select
                                    {...field}
                                    disabled={readonly}
                                    options={Object.entries(Telephone).map(
                                        ([key, value]) => ({
                                            label: value,
                                            value: key,
                                        })
                                    )}
                                />
                            )}
                            rules={{ required: !readonly && 'Required' }}
                            formItemProps={{ label: 'Telephone' }}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
