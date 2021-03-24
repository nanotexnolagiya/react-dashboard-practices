import { Button, Col, Form, Input, Row, Select, Spin } from 'antd';
import { FC, useState } from 'react';

import { RouteChildrenProps } from 'react-router';

export interface UserFormProps extends RouteChildrenProps {}

export const UserForm: FC<UserFormProps> = ({ history }) => {
  const handleCancel = () => {
    history.goBack();
  };

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleChange = () => {};

  const handleSearch = () => {};

  const handleScrollPopup = () => {};

  return (
    <Form layout="vertical">
      <Row gutter={[15, 15]}>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Field required' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            className="defaultInput"
            name="role_id"
            label={'Role'}
            rules={[{ required: true, message: 'Field required' }]}
          >
            <Select
              onChange={handleChange}
              onSearch={handleSearch}
              onPopupScroll={handleScrollPopup}
              placeholder={'Choose Role'}
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
            Cancel
          </Button>
        </Col>
        <Col>
          <Button size="large" type="primary">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
