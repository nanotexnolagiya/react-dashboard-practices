import { Button, Modal, Space, Table, Tooltip, message } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { deleteUser, fetchUsers } from '../thunks/userThunk';
import { useDispatch, useSelector } from 'react-redux';

import { IUser } from '../slices/userSlice';
import { State } from '../../common/store';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface UsersPageProps extends RouteChildrenProps {}

export const UsersPage: FC<UsersPageProps> = ({ location, history }) => {
  const dispatch = useDispatch();
  const t = useMessage();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const users: IUser[] = useSelector((state: State) => state.users.list);
  const isFetching: boolean = useSelector((state: State) => state.users.isFetching);

  const handleEdit = useCallback(
    (item: IUser): void => {
      history.push(`${location.pathname}/${item.id}/edit`);
    },
    [history, location.pathname]
  );

  const handleDelete = useCallback(
    (item: IUser): void => {
      Modal.confirm({
        title: t('are_you_sure_delete'),
        icon: <ExclamationCircleOutlined />,
        content: '',
        okText: t('yes'),
        okType: 'danger',
        cancelText: t('no'),
        async onOk() {
          const messageKey = 'delete';
          message.loading({
            content: t('loading'),
            key: messageKey,
          });
          const res = await deleteUser(`${item.id}`)(dispatch);
          message.success({
            content: res.message,
            key: messageKey,
          });
        },
      });
    },
    [dispatch, t]
  );

  const columns: ColumnsType<IUser> = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        sorter: true,
      },
      {
        title: t('first_name'),
        dataIndex: 'first_name',
        sorter: true,
      },
      {
        title: t('last_name'),
        dataIndex: 'last_name',
        sorter: true,
      },
      {
        title: t('email'),
        dataIndex: 'email',
        sorter: true,
      },
      {
        title: t('phone'),
        dataIndex: 'phone',
        sorter: true,
      },
      {
        title: t('role'),
        dataIndex: 'role_id',
        sorter: true,
      },
      {
        title: '',
        key: 'action',
        width: 130,
        render: (item: IUser) => (
          <Space size="middle">
            <Tooltip title={t('edit')}>
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                onClick={handleEdit.bind(null, item)}
              />
            </Tooltip>
            <Tooltip title={t('delete')}>
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={handleDelete.bind(null, item)}
              />
            </Tooltip>
          </Space>
        ),
      },
    ],
    [handleDelete, handleEdit, t]
  );

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IUser> | SorterResult<IUser>[],
    extra: TableCurrentDataSource<IUser>
  ) => {
    setPagination({
      ...pagination,
      total: 200,
    });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Link to={location.pathname + '/new'}>
        <Button type="primary" style={{ marginBottom: 16 }}>
          {t('add')}
        </Button>
      </Link>
      <Table<IUser>
        columns={columns}
        rowKey={(record: IUser) => `${record.id}`}
        dataSource={users}
        pagination={pagination}
        loading={isFetching}
        onChange={handleTableChange}
      />
    </>
  );
};
