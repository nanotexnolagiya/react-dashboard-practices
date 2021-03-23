import { ColumnsType, FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { FC, useState } from 'react';
import { Table, TablePaginationConfig } from 'antd';

import { IUser } from '../interface';

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

export const UsersPage: FC = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const handleTableChange = (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<IUser> | SorterResult<IUser>[], extra: TableCurrentDataSource<IUser>) => {
    setPagination({
      ...pagination,
      total: 200
    })
  }

  return (
    <Table<IUser>
      columns={columns}
      rowKey={(record: IUser) => `${record.id}`}
      dataSource={[]}
      pagination={pagination}
      loading={false}
      onChange={handleTableChange}
    />
  );
};
