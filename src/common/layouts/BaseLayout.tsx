import './BaseLayout.css';

import { Button, Dropdown, Layout, Menu } from 'antd';
import { DownOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { FC, Fragment, useCallback, useMemo } from 'react';

import { Link } from 'react-router-dom';
import { useLocaleManager } from '../components/i18n/useLocaleManager';
import { useMessage } from '../components/i18n/useMessage';

export interface ILanguage {
  code: 'ru' | 'uz';
  name: string;
}

export const BaseLayout: FC<{}> = ({ children }) => {
  const t = useMessage();
  const localeManager = useLocaleManager();
  const languages: ILanguage[] = useMemo(
    () => [
      {
        code: 'ru',
        name: 'Russian',
      },
      {
        code: 'uz',
        name: 'Uzbek',
      },
    ],
    []
  );

  const handleChangeLanguage = useCallback(
    (item: ILanguage) => {
      localeManager.setCurrent(item.code);
    },
    [localeManager]
  );

  const languagesDropdown = useMemo(
    () => (
      <Menu>
        {languages
          .filter((language: ILanguage) => language.code !== localeManager.getCurrent())
          .map((language: ILanguage, index: number) => (
            <Fragment key={language.code}>
              {index !== 0 && <Menu.Divider />}
              <Menu.Item key={language.code} onClick={handleChangeLanguage.bind(null, language)}>
                {language.name}
              </Menu.Item>
            </Fragment>
          ))}
      </Menu>
    ),
    [handleChangeLanguage, languages, localeManager]
  );

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
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/users">{t('users')}</Link>
          </Menu.Item>
          <Menu.SubMenu key="settings" icon={<SettingOutlined />} title={t('settings')}>
            <Menu.Item key="roles" icon={<UserOutlined />}>
              <Link to="/roles">{t('roles')}</Link>
            </Menu.Item>
            <Menu.Item key="permissions" icon={<UserOutlined />}>
              <Link to="/permissions">{t('permissions')}</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Layout.Header className="site-layout-background" style={{ padding: '0 15px' }}>
          <Dropdown overlay={languagesDropdown} trigger={['click']}>
            <Button>
              {languages.find((language: ILanguage) => language.code === localeManager.getCurrent())
                ?.name || 'Languages'}{' '}
              <DownOutlined />
            </Button>
          </Dropdown>
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
  );
};
