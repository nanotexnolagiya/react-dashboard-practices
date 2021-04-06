import { Button, Col, Row, message } from 'antd';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createRole, fetchRole, updateRole } from '../thunks/roleThunk';
import { useDispatch, useSelector } from 'react-redux';

import { ISubmitEvent } from '@rjsf/core';
import { IsomorphicForm } from '../../common/components/IsomorphicForm';
import { Link } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { State } from '../../common/store';
import { fetchPermissions } from '../../permissions/thunks/permissionThunk';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface RoleInitialForm {
  name: string;
  permission_id: number | null;
}

export interface RoleFormProps
  extends RouteChildrenProps<
    {
      id?: string;
    },
    {
      role?: {
        redirect?: string;
        formData?: any;
      };
    }
  > {}

export const RoleForm: FC<RoleFormProps> = ({ history, match, location }) => {
  const t = useMessage();
  const dispatch = useDispatch();
  const isUpdating = useSelector((state: State) => state.role.isUpdating);
  const role = useSelector((state: State) => state.role.data);
  const permissions = useSelector((state: State) => state.permissions.list);

  const schema: any = useMemo(
    () => ({
      type: 'object',
      required: ['name', 'permission_id'],
      properties: {
        name: { title: t('name'), type: 'string' },
        permission_id: {
          title: t('permissions'),
          type: 'number',
          enum: permissions.map((p: any) => p.id),
          enumNames: permissions.map((p: any) => p.name),
        },
      },
    }),
    [permissions, t]
  );

  const UISchema: any = useMemo(
    () => ({
      permission_id: {
        'ui:placeholder': t('choose_permission'),
      },
    }),
    [t]
  );

  const [formData, setFormData] = useState<RoleInitialForm>({
    name: '',
    permission_id: null,
  });

  const handleCancel = (): void => {
    history.goBack();
  };

  const handleChangeForm = (e: ISubmitEvent<RoleInitialForm>): void => {
    setFormData(e.formData);
  };

  const handleSubmit = useCallback(
    async (e: ISubmitEvent<RoleInitialForm>): Promise<void> => {
      const messageKey = 'submit';
      let res: any;
      message.loading({
        content: t('loading'),
        key: messageKey,
      });
      try {
        if (match?.params?.id) {
          res = await updateRole(e.formData)(dispatch);
        } else {
          res = await createRole(e.formData)(dispatch);
        }

        message.success({
          content: res.message,
          key: messageKey,
        });
        if (location?.state?.role?.redirect) {
          history.push({
            pathname: location?.state?.role?.redirect,
            state: {
              ...location?.state,
              role: undefined,
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
      dispatch(fetchRole(match?.params?.id));
    }
  }, [dispatch, match?.params?.id]);

  useEffect(() => {
    if (role) {
      setFormData(role);
    }
  }, [role]);

  useEffect(() => {
    dispatch(fetchPermissions());
  }, [dispatch]);

  useEffect(() => {
    if (location?.state?.role?.formData) {
      setFormData(location?.state?.role?.formData);
    }
  }, [location?.state?.role?.formData]);

  return (
    <IsomorphicForm
      schema={schema}
      uiSchema={UISchema}
      formData={formData}
      onChange={handleChangeForm}
      onSubmit={handleSubmit}
    >
      <Link
        to={{
          pathname: '/permissions/new',
          state: { permission: { redirect: history.location.pathname }, role: { formData } },
        }}
      >
        <Button type="primary">{t('add_role')}</Button>
      </Link>
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
