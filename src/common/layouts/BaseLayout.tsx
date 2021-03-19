import './BaseLayout.css'

import { Layout, Menu } from 'antd'
import {
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { FC } from 'react'
import { Link } from 'react-router-dom'

export const BaseLayout: FC<{}> = ({ children }) => {

  return (
    <Layout>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="dashboard" icon={<UserOutlined />}>
            <Link to="/">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/users">
              Users
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="settings" icon={<SettingOutlined />} title="Settings">
            <Menu.Item key="roles" icon={<UserOutlined />}>
              <Link to="/roles">
                Roles
              </Link>
            </Menu.Item>
            <Menu.Item key="permissions" icon={<UserOutlined />}>
              <Link to="/permissions">
                Permissions
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Layout.Header
          className="site-layout-background"
          style={{ padding: 0 }}
        >
        </Layout.Header>
        <Layout.Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
