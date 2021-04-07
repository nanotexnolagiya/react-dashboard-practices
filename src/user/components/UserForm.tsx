import { Button, Col, Row, message } from 'antd';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createUser, fetchUser, updateUser } from '../thunks/userThunk';
import { useDispatch, useSelector } from 'react-redux';

import { IRole } from '../../role/slices/roleSlice';
import { ISubmitEvent } from '@rjsf/core';
import { IsomorphicForm } from '../../common/components/IsomorphicForm';
import { Link } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { State } from '../../common/store';
import { fetchRoles } from '../../role/thunks/roleThunk';
import { mergeDeep } from '../../common/utils';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface UserInitialForm {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  role_id?: number | null;
}

export interface UserFormProps
  extends RouteChildrenProps<
    {
      id?: string;
    },
    {
      user?: {
        redirect?: string;
        formData?: any;
      };
    }
  > {}

export const UserForm: FC<UserFormProps> = ({ history, match, location }) => {
  const t = useMessage();
  const dispatch = useDispatch();
  const isUpdating = useSelector((state: State) => state.user.isUpdating);
  const user = useSelector((state: State) => state.user.data);
  const roles = useSelector((state: State) => state.roles.list);

  const schema: any = useMemo(
    () => ({
      type: 'object',
      required: ['phone', 'role_id'],
      properties: {
        first_name: { title: t('first_name'), type: 'string' },
        last_name: { title: t('last_name'), type: 'string' },
        email: { title: t('email'), type: 'string', format: 'email' },
        phone: { title: t('phone'), type: 'number', minLength: 12 },
        password: { title: t('password'), type: 'string' },
        role_id: {
          title: t('roles'),
          type: 'number',
          enum: roles.map((p: IRole) => p.id),
          enumNames: roles.map((p: IRole) => p.name),
        },
      },
    }),
    [roles, t]
  );

  const UISchema: any = useMemo(
    () => ({
      role_id: {
        'ui:placeholder': t('choose_role'),
      },
      password: {
        'ui:widget': 'password',
      },
    }),
    [t]
  );

  const [formData, setFormData] = useState<UserInitialForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    role_id: undefined,
  });

  const redirectBack = useCallback(() => {
    if (location?.state?.user?.redirect) {
      history.push({
        pathname: location?.state?.user?.redirect,
        state: {
          ...location?.state,
          user: undefined,
        },
      });
    } else {
      history.goBack();
    }
  }, [history, location?.state]);

  const handleCancel = (): void => {
    redirectBack();
  };

  const handleChangeForm = (e: ISubmitEvent<UserInitialForm>): void => {
    setFormData(e.formData);
  };

  const handleSubmit = useCallback(
    async (e: ISubmitEvent<UserInitialForm>): Promise<void> => {
      const messageKey = 'submit';
      let res: any;
      message.loading({
        content: t('loading'),
        key: messageKey,
      });
      try {
        if (match?.params?.id) {
          res = await updateUser(e.formData)(dispatch);
        } else {
          res = await createUser(e.formData)(dispatch);
        }

        message.success({
          content: res.message,
          key: messageKey,
        });
        redirectBack();
      } catch (e) {
        message.error({
          content: e.message,
          key: messageKey,
        });
      }
    },
    [dispatch, match?.params?.id, redirectBack, t]
  );

  useEffect(() => {
    if (match?.params?.id) {
      dispatch(fetchUser(match?.params?.id));
    }
  }, [dispatch, match?.params?.id]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    if (location?.state?.user?.formData) {
      setFormData(location?.state?.user?.formData);
    }
  }, [location?.state?.user?.formData]);

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
          pathname: '/roles/new',
          state: mergeDeep(
            {
              role: { redirect: history.location.pathname },
              user: { formData },
            },
            { ...location.state }
          ),
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
