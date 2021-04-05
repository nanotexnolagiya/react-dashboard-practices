import { Button, Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { FC, useEffect, useMemo, useState } from 'react';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IRole } from '../slices/roleSlice';
import { State } from '../../common/store';
import { fetchRoles } from '../thunks/roleThunk';
import { useMessage } from '../../common/components/i18n/useMessage';

export interface RolesPageProps extends RouteChildrenProps {}

export const RolesPage: FC<RolesPageProps> = ({ location }) => {
  const dispatch = useDispatch();
  const t = useMessage();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const roles: IRole[] = useSelector((state: State) => state.roles.list);

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
    ],
    [t]
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
          Add a row
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
