import React from 'react'
import { useInputForm } from './input-form.hook.ts'
import { FormProvider } from 'react-hook-form'
import { Button, Col, InputNumber, Row, Select } from 'antd'
import { ControlledFormElement } from '../controlled-form-element/controlled-form-element.component.tsx'
import {
    CheckingAccountStatus,
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

export const InputForm: React.FC = () => {
    const { form, handleSave, handleSubmit } = useInputForm()

    return (
        <FormProvider {...form}>
            <Row>
                <Col span={24}>
                    <ControlledFormElement
                        control={form.control}
                        name="checkingAccountStatus"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(
                                    CheckingAccountStatus
                                ).map(([key, value]) => ({
                                    label: value,
                                    value: key,
                                }))}
                            />
                        )}
                        formItemProps={{ label: 'Checking Account Status' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="durationInMonths"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{ label: 'Duration in Months' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="creditHistory"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(CreditHistory).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Credit History' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="purpose"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(Purpose).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Purpose' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="creditAmount"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{ label: 'Credit Amount' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="savingsAccount"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(SavingsAccount).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Savings Account' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="employmentDuration"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(EmploymentDuration).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Employment Duration' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="installmentRate"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{ label: 'Installment Rate' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="personalStatus"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(PersonalStatus).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Personal Status' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="otherDebtors"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(OtherDebtors).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'OtherDebtors' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="presentResidenceSince"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{ label: 'Present Residence Since' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="property"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(Property).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Property' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="age"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{ label: 'Age' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="otherInstallmentPlans"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(InstallmentPlans).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Other Installment Plans' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="housing"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(Housing).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Housing' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="numberOfExistingCredits"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{ label: 'Number of Existing Credits' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="job"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(Job).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Job' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="numberOfPeopleLiableForMaintenance"
                        render={(field) => <InputNumber {...field} />}
                        formItemProps={{
                            label: 'Number of People Liable for Maintenance',
                        }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="telephone"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(Telephone).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Telephone' }}
                    />
                    <ControlledFormElement
                        control={form.control}
                        name="foreignWorker"
                        render={(field) => (
                            <Select
                                {...field}
                                options={Object.entries(ForeignWorker).map(
                                    ([key, value]) => ({
                                        label: value,
                                        value: key,
                                    })
                                )}
                            />
                        )}
                        formItemProps={{ label: 'Foreign Worker' }}
                    />
                    <Button type="primary" onClick={handleSubmit(handleSave)}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </FormProvider>
    )
}
