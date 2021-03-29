import { Button, Col, Form, Input, Row, Select, Spin } from 'antd';
import { FC, useState } from 'react';

import { RouteChildrenProps } from 'react-router';
import { useForm } from 'antd/lib/form/Form';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface UserFormProps extends RouteChildrenProps {}

export const UserForm: FC<UserFormProps> = ({ history }) => {
  const [form] = useForm();
  const t = useMessage();

  const handleCancel = () => {
    history.goBack();
  };

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleChange = () => {};

  const handleSearch = () => {};

  const handleScrollPopup = () => {};

  return (
    <Form layout="vertical" form={form}>
      <Row gutter={[15, 15]}>
        <Col span={24}>
          <Form.Item
            name="name"
            label={t('name')}
            rules={[{ required: true, message: t('required_field') }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            className="defaultInput"
            name="role_id"
            label={t('role')}
            rules={[{ required: true, message: t('required_field') }]}
          >
            <Select
              onChange={handleChange}
              onSearch={handleSearch}
              onPopupScroll={handleScrollPopup}
              placeholder={t('choose_role')}
              showSearch
              notFoundContent={loading ? <Spin size="small" /> : null}
              loading={loading}
              filterOption={false}
            >
              {options.map((option: any) => (
                <Select.Option key={option.id} value={option.id} item={option}>
                  {option.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end" gutter={[20, 0]}>
        <Col>
          <Button size="large" onClick={handleCancel}>
            {t('cancel')}
          </Button>
        </Col>
        <Col>
          <Button size="large" type="primary">
            {t('save')}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
