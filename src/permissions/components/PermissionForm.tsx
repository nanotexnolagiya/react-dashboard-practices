import { Button, Col, Row, message } from 'antd';
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
  extends RouteChildrenProps<
    {
      id?: string;
    },
    {
      permission?: {
        redirect?: string;
        formData?: any;
      };
    }
  > {}

export const PermissionForm: FC<PermissionFormProps> = ({ history, location, match }) => {
  const t = useMessage();
  const dispatch = useDispatch();
  const isUpdating = useSelector((state: State) => state.permission.isUpdating);
  const permission = useSelector((state: State) => state.permission.data);

  const schema: any = useMemo(
    () => ({
      type: 'object',
      required: ['name'],
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
    async (e: ISubmitEvent<PermissionInitialForm>): Promise<void> => {
      const messageKey = 'submit';
      let res: any;
      message.loading({
        content: t('loading'),
        key: messageKey,
      });
      try {
        if (match?.params?.id) {
          res = await updatePermission(e.formData)(dispatch);
        } else {
          res = await createPermission(e.formData)(dispatch);
        }

        message.success({
          content: res.message,
          key: messageKey,
        });
        if (location?.state.permission?.redirect) {
          history.push({
            pathname: location?.state.permission?.redirect,
            state: {
              ...location?.state,
              permission: undefined,
            },
          });
        } else {
          history.goBack();
        }
      } catch (e) {
        message.error({
          content: e.message,
          key: messageKey,
        });
      }
    },
    [dispatch, history, location?.state, match?.params?.id, t]
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

  useEffect(() => {
    if (location?.state?.permission?.formData) {
      setFormData(location?.state?.permission?.formData);
    }
  }, [location?.state?.permission?.formData]);

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
            {t(match?.params?.id ? 'update' : 'save')}
          </Button>
        </Col>
      </Row>
    </IsomorphicForm>
  );
};
