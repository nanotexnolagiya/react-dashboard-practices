import { Button, Col, Form, Input, Row } from 'antd';

import { FC } from 'react';

export const RoleForm: FC = () => {
  return (
    <Form>
      <Row gutter={[15, 15]}>
        <Col span={24}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end" gutter={[20, 0]}>
        <Col>
          <Button size="large">Cancel</Button>
        </Col>
        <Col>
          <Button type="primary">Save</Button>
        </Col>
      </Row>
    </Form>
  );
};
