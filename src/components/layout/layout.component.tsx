import React from 'react'
import { Layout, Menu, theme } from 'antd'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../routing/route-names.ts'

interface LayoutProps {
    children?: React.ReactNode
}

const { Header, Content, Footer } = Layout

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    const navigationItems = [
        {
            label: <Link to={RouteNames.predict}>Predict</Link>,
            key: RouteNames.predict,
        },
        {
            label: <Link to={RouteNames.list}>Results</Link>,
            key: RouteNames.list,
        },
    ]

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ flex: 1, minWidth: 0 }}
                    items={navigationItems}
                    defaultSelectedKeys={[RouteNames.predict]}
                />
            </Header>
            <Content style={{ padding: '0 48px', margin: '48px 0' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Lukas Lachkovic ©2024
            </Footer>
        </Layout>
    )
}
