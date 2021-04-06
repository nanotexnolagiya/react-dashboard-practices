import { Button, Modal, Space, Table, Tooltip, message } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { deleteRole, fetchRoles } from '../thunks/roleThunk';
import { useDispatch, useSelector } from 'react-redux';

import { IRole } from '../slices/roleSlice';
import { State } from '../../common/store';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface RolesPageProps extends RouteChildrenProps {}

export const RolesPage: FC<RolesPageProps> = ({ location, history }) => {
  const dispatch = useDispatch();
  const t = useMessage();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const roles: IRole[] = useSelector((state: State) => state.roles.list);

  const handleEdit = useCallback(
    (item: IRole): void => {
      history.push(`${location.pathname}/${item.id}/edit`);
    },
    [history, location.pathname]
  );

  const handleDelete = useCallback(
    (item: IRole): void => {
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
          const res = await deleteRole(`${item.id}`)(dispatch);
          message.success({
            content: res.message,
            key: messageKey,
          });
        },
      });
    },
    [dispatch, t]
  );

  const columns: ColumnsType<IRole> = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        sorter: true,
      },
      {
        title: t('name'),
        dataIndex: 'name',
        sorter: true,
      },
      {
        title: t('permission'),
        dataIndex: 'permission_id',
        sorter: true,
      },
      {
        title: '',
        key: 'action',
        width: 130,
        render: (item: IRole) => (
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
    sorter: SorterResult<IRole> | SorterResult<IRole>[],
    extra: TableCurrentDataSource<IRole>
  ) => {
    setPagination({
      ...pagination,
      total: 200,
    });
  };

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <>
      <Link to={location.pathname + '/new'}>
        <Button type="primary" style={{ marginBottom: 16 }}>
          {t('add')}
        </Button>
      </Link>
      <Table<IRole>
        columns={columns}
        rowKey={(record: IRole) => `${record.id}`}
        dataSource={roles}
        pagination={pagination}
        loading={false}
        onChange={handleTableChange}
      />
    </>
  );
};
