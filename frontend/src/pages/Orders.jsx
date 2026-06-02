import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");

      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="mt-10 px-10 grid justify-center">
      <h1 className="text-2xl mb-6">Orders</h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="mb-10">
            <hr className="mb-4" />

            <p className="mb-2">
              <strong>Name:</strong> {order.name}
            </p>

            <p className="mb-2">
              <strong>Phone:</strong> {order.number}
            </p>

            <p className="mb-2">
              <strong>Address:</strong> {order.address}
            </p>

            <p className="mb-2">
              <strong>Payment Method:</strong> {order.paymentMode}
            </p>

            <p className="mb-4">
              <strong>Total:</strong> {order.total}
            </p>

            <p className="mb-2">
              <strong>Summary:</strong>
            </p>

            <div className="ml-4">
              {order.summary.map((item, index) => (
                <p key={index} className="mb-1">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
