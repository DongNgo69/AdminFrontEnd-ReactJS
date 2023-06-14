import React, { useEffect } from 'react'
import { Table } from 'antd';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getOrderByUser, getOrders} from "../../features/auth/authSlice";
const columns = [
    {
        title: "SNo",
        dataIndex: "key",
      },
      {
        title: "Product Name",
        dataIndex: "name",
      },
      {
        title: "Brand",
        dataIndex: "brand",
      },
      {
        title: "Count",
        dataIndex: "count",
      },
      {
        title: "Color",
        dataIndex: "color",
      },
      {
        title: "Amount",
        dataIndex: "amount",
      },
      {
        title: "Date",
        dataIndex: "date",
      },
];
const ViewOrder = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = location.pathname.split('/')[3];
  useEffect(() => {
    if (userId !== undefined) {
      dispatch(getOrderByUser(userId)); //nếu lấy dc ID thì sẽ lấy thông tin của cái id đó ra
    }
  }, [userId]);
  const orderState = useSelector((state) => state.auth.orderbyuser.products); //auth.order vì lấy ra đơn hàng của từng auth
  console.log(orderState)
  const data = [];
  for (let i = 0; i < orderState.length; i++) {
    data.push({
      key: i + 1,
      name: orderState[i].product.title,
      brand: orderState[i].product.brand,
      count: orderState[i].count,
      amount: orderState[i].product.price,
      color: orderState[i].product.color,
      date: orderState[i].product.createdAt,
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Chi tiết hóa đơn</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <Link to='/admin/orders'>
        Quay về
      </Link>
    </div>
  );
};

export default ViewOrder