import React from 'react'
import { Button, Table } from 'antd';

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
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `London, Park Lane no. ${i}`,
    });
}
const Enquiry = () => {
  return (
    <div>
        <h3 className='mb-4'>Enquiry</h3>
        <Table columns={columns} dataSource={data1} />
    </div>
  )
}

export default Enquiry