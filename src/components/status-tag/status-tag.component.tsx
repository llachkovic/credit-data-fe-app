import { Tag } from 'antd'
import React from 'react'
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons'

export type TagValues = 'APPROVED' | 'PENDING' | 'REJECTED'
interface StatusTagProps {
    value: TagValues
}

export const StatusTag: React.FC<StatusTagProps> = ({ value }) => {
    const icon =
        value === 'APPROVED' ? (
            <CheckCircleOutlined />
        ) : value === 'REJECTED' ? (
            <CloseCircleOutlined />
        ) : (
            <ExclamationCircleOutlined />
        )

    const color =
        value === 'APPROVED' ? 'green' : value === 'REJECTED' ? 'red' : 'yellow'
    return (
        <Tag icon={icon} color={color}>
            {value}
        </Tag>
    )
}
