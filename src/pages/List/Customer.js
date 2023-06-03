import React from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: 'No.',
      dataIndex: 'key',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `London, Park Lane no. ${i}`,
    });
}
const Customer = () => {
  return (
    <div>
        <h3 className='mb-4'>Customer</h3>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Customer