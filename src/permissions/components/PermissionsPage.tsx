import { Button, Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { FC, useEffect, useState } from 'react';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IPermission } from '../slices/permissionSlice';
import { State } from '../../common/store';
import { fetchPermissions } from '../thunks/permissionThunk';

const columns: ColumnsType<IPermission> = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
  },
];

export interface PermissionsPageProps extends RouteChildrenProps {}

export const PermissionsPage: FC<PermissionsPageProps> = ({ location }) => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const permissions: IPermission[] = useSelector((state: State) => state.permissions.list);

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
          Add a row
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
