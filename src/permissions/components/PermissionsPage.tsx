import { Button, Modal, Space, Table, Tooltip, message } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { deletePermission, fetchPermissions } from '../thunks/permissionThunk';
import { useDispatch, useSelector } from 'react-redux';

import { IPermission } from '../slices/permissionSlice';
import { State } from '../../common/store';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface PermissionsPageProps extends RouteChildrenProps {}

export const PermissionsPage: FC<PermissionsPageProps> = ({ location, history }) => {
  const dispatch = useDispatch();
  const t = useMessage();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const permissions: IPermission[] = useSelector((state: State) => state.permissions.list);

  const handleEdit = useCallback(
    (item: IPermission): void => {
      history.push(`${location.pathname}/${item.id}/edit`);
    },
    [history, location.pathname]
  );

  const handleDelete = useCallback(
    (item: IPermission): void => {
      Modal.confirm({
        title: t('are_you_sure_delete'),
        icon: <ExclamationCircleOutlined />,
        content: '',
        okText: t('yes'),
        okType: 'danger',
        cancelText: t('no'),
        onOk() {
          const messageKey = 'delete';
          message.loading({
            content: t('loading'),
            key: messageKey,
          });
          dispatch(deletePermission(`${item.id}`));
          message.success({
            content: 'Success',
            key: messageKey,
          });
        },
      });
    },
    [dispatch, t]
  );

  const columns: ColumnsType<IPermission> = useMemo(
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
        title: '',
        key: 'action',
        width: 130,
        render: (item: IPermission) => (
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
    sorter: SorterResult<IPermission> | SorterResult<IPermission>[],
    extra: TableCurrentDataSource<IPermission>
  ) => {
    setPagination({
      ...pagination,
      total: 200,
    });
  };

  useEffect(() => {
    dispatch(fetchPermissions());
  }, [dispatch]);

  return (
    <>
      <Link to={location.pathname + '/new'}>
        <Button type="primary" style={{ marginBottom: 16 }}>
          {t('add')}
        </Button>
      </Link>
      <Table<IPermission>
        columns={columns}
        rowKey={(record: IPermission) => `${record.id}`}
        dataSource={permissions}
        pagination={pagination}
        loading={false}
        onChange={handleTableChange}
      />
    </>
  );
};
