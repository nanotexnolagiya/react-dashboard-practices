import { Button, Table, TablePaginationConfig } from 'antd';
import {
  ColumnsType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from 'antd/lib/table/interface';
import { FC, useState } from 'react';

import { IUser } from '../interface';
import { Link } from 'react-router-dom';

const columns: ColumnsType<IUser> = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    sorter: true,
  },
];

const dataSource: IUser[] = [
  {
    id: 1,
    username: 'Username 1',
  },
];

export const UsersPage: FC = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

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

  return (
    <>
      <Link to="/users/new">
        <Button type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
      </Link>
      <Table<IUser>
        columns={columns}
        rowKey={(record: IUser) => `${record.id}`}
        dataSource={dataSource}
        pagination={pagination}
        loading={false}
        onChange={handleTableChange}
      />
    </>
  );
};
