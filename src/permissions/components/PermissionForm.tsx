import { Button, Col, Row } from 'antd';
import { FC, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ISubmitEvent } from '@rjsf/core';
import { IsomorphicForm } from '../../common/components/IsomorphicForm';
import { RouteChildrenProps } from 'react-router';
import { State } from '../../common/store';
import { createPermission } from '../thunks/permissionThunk';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface PermissionInitialForm {
  name: string;
}

export interface PermissionFormProps extends RouteChildrenProps {}

export const PermissionForm: FC<PermissionFormProps> = ({ history }) => {
  const t = useMessage();
  const dispatch = useDispatch();
  const isUpdating = useSelector((state: State) => state.permission.isUpdating);

  const schema: any = useMemo(
    () => ({
      type: 'object',
      properties: {
        name: { title: t('name'), type: 'string' },
      },
    }),
    [t]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState<PermissionInitialForm>({
    name: '',
  });

  const handleCancel = (): void => {
    history.goBack();
  };

  const handleSubmit = (e: ISubmitEvent<PermissionInitialForm>): void => {
    console.log({ formData: e.formData });
    dispatch(createPermission(e.formData));
    history.goBack();
  };

  return (
    <IsomorphicForm schema={schema} formData={formData} onSubmit={handleSubmit}>
      <Row justify="end" gutter={[20, 0]}>
        <Col>
          <Button size="large" onClick={handleCancel}>
            {t('cancel')}
          </Button>
        </Col>
        <Col>
          <Button loading={isUpdating} size="large" type="primary" htmlType="submit">
            {t('save')}
          </Button>
        </Col>
      </Row>
    </IsomorphicForm>
  );
};
