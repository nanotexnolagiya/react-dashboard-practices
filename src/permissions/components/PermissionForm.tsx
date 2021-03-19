import { Form, Input } from "antd";

import { FC } from "react";

export const PermissionForm: FC = () => {
  return (
    <Form>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
    </Form>
  )
}