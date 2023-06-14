import axios from "axios";
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axiosconfig" //check token thuộc quyền nào
const login = async (user) => {
    const response = await axios.post(`${base_url}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
const getOrders = async () => {
    const response = await axios.get(`${base_url}user/getallorders`, config);
  
    return response.data;
};
const getOrder = async (id) => {
    const response = await axios.post(
      `${base_url}user/getorderbyuser/${id}`,
      "",
      config
    );
  
    return response.data;
};

const updateOrder = async (order) => {
    const response = await axios.put(
        `${base_url}user/order/update-order/${order.id}`,
        { status: order.orderData },
        config
      );
      return response.data;
}

const authService = {
    login,
    getOrders,
    getOrder,
    updateOrder
};

export default authService;