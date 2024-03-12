import { ReactNode } from 'react'
import {
    Control,
    Controller,
    ControllerProps,
    ControllerRenderProps,
    FieldPath,
    FieldValues,
} from 'react-hook-form'

import { Form, FormItemProps } from 'antd'
import { isDefined } from '../../utils/is-defined.util.ts'

interface ControlledFormElementProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    control: Control<TFieldValues>
    name: TName
    rules?: ControllerProps['rules']
    render: (field: ControllerRenderProps<FieldValues, string>) => ReactNode
    formItemProps?: FormItemProps
}

export const ControlledFormElement = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    control,
    name,
    render,
    rules,
    formItemProps,
}: ControlledFormElementProps<TFieldValues, TName>) => (
    <Controller
        control={control as never}
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <Form.Item
                {...formItemProps}
                help={error?.message}
                labelCol={{ span: 24 }}
                required={Boolean(rules?.required)}
                validateStatus={isDefined(error) ? 'error' : undefined}
            >
                {render(field)}
            </Form.Item>
        )}
    />
)
