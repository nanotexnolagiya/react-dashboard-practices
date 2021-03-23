import { Button, Col, Form, Input, Row } from 'antd';

import { FC } from 'react';
import { RouteChildrenProps } from 'react-router';

export interface UserFormProps extends RouteChildrenProps {}

export const UserForm: FC<UserFormProps> = ({ history }) => {
  const handleCancel = () => {
    history.goBack();
  };

  return (
    <Form layout="vertical">
      <Row gutter={[15, 15]}>
        <Col span={24}>
          <Form.Item name="name" label="Name">
            <Input />
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
