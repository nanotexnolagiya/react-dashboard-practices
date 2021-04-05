import { Button, Col, Row } from 'antd';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createPermission, fetchPermission, updatePermission } from '../thunks/permissionThunk';
import { useDispatch, useSelector } from 'react-redux';

import { ISubmitEvent } from '@rjsf/core';
import { IsomorphicForm } from '../../common/components/IsomorphicForm';
import { RouteChildrenProps } from 'react-router';
import { State } from '../../common/store';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface PermissionInitialForm {
  name: string;
}

export interface PermissionFormProps
  extends RouteChildrenProps<{
    id?: string;
  }> {}

export const PermissionForm: FC<PermissionFormProps> = ({ history, match }) => {
  const t = useMessage();
  const dispatch = useDispatch();
  const isUpdating = useSelector((state: State) => state.permission.isUpdating);
  const permission = useSelector((state: State) => state.permission.data);

  const schema: any = useMemo(
    () => ({
      type: 'object',
      properties: {
        name: { title: t('name'), type: 'string' },
      },
    }),
    [t]
  );

  const [formData, setFormData] = useState<PermissionInitialForm>({
    name: '',
  });

  const handleCancel = (): void => {
    history.goBack();
  };

  const handleSubmit = useCallback(
    (e: ISubmitEvent<PermissionInitialForm>): void => {
      if (match?.params?.id) {
        dispatch(updatePermission(e.formData));
      } else {
        dispatch(createPermission(e.formData));
      }
      history.goBack();
    },
    [dispatch, history, match?.params?.id]
  );

  useEffect(() => {
    if (match?.params?.id) {
      dispatch(fetchPermission(match?.params?.id));
    }
  }, [dispatch, match?.params?.id]);

  useEffect(() => {
    if (permission) {
      setFormData(permission);
    }
  }, [permission]);

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
