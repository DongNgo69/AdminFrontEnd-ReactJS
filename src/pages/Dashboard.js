import React from 'react'
import {BsArrowDownRight, BsArrowUpRight} from 'react-icons/bs'
import { Column } from '@ant-design/plots';
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
const Dashboard = () => {
  const data = [
    {
      type: 'Th-1',
      sales: 61,
    },
    {
      type: 'Th-2',
      sales: 145,
    },
    {
      type: 'Th-3',
      sales: 48,
    },
    {
      type: 'Th-4',
      sales: 38,
    },
    {
      type: 'Th-5',
      sales: 38,
    },
    {
      type: 'Th-6',
      sales: 38,
    },
    {
      type: 'Th-7',
      sales: 38,
    },
    {
      type: 'Th-8',
      sales: 52,
    },
    {
      type: 'Th-9',
      sales: 38,
    },
    {
      type: 'Th-10',
      sales: 52,
    },
    {
      type: 'Th-11',
      sales: 38,
    },
    {
      type: 'Th-12',
      sales: 52,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Tháng',
      },
      sales: {
        alias: 'Đơn hàng',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3 '>
          <div>
            <p>Tổng doanh thu</p>
            <h4>69.000.000 VNĐ</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'> <BsArrowUpRight />33%</h6>
            <p className='mb-0'>Tính đến tháng 6 - 2023</p>
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3 '>
          <div>
            <p>Tổng doanh thu</p>
            <h4>69.000.000 VNĐ</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'> <BsArrowUpRight />33%</h6>
            <p className='mb-0'>Tính đến tháng 6 - 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3 '>
          <div>
            <p>Tổng doanh thu</p>
            <h4>69.000.000 VNĐ</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'> <BsArrowDownRight />33%</h6>
            <p className='mb-0'>Tính đến tháng 6 - 2023</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mt-4'>Thống kế doanh thu</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mt-4'>Danh sách đơn hàng</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard