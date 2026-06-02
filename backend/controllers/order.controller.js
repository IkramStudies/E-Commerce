import Order from "../model/Order.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { user, name, number, address, paymentMode, qty, summary, total } =
      req.body;

    if (!name || !number || !address || !paymentMode || !summary || !total) {
      return res.status(400).json({
        status: false,
        message: "All fields are necessary",
      });
    }

    const order = await Order.create({
      user,
      name,
      number,
      address,
      paymentMode,
      qty,
      summary,
      total,
    });

    return res.status(201).json({
      status: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    return res.status(200).json({
      status: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
