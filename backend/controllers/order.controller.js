import Order from "../model/Order.model.js";

export const placeOrder = async (req, res) => {
  try {
    // Temporary fix until auth middleware is added
    const user = req.user ? req.user.id : null;

    const { name, number, address, paymentMode, qty, summary, total } =
      req.body;

    // Validation
    if (
      !name ||
      !number ||
      !address ||
      !paymentMode ||
      summary.length === 0 ||
      !total
    ) {
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
    console.log(error);

    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    // If auth exists → fetch user-specific orders
    // Else → fetch all orders temporarily

    let orders;

    if (req.user) {
      orders = await Order.find({
        user: req.user.id,
      }).sort({ createdAt: -1 });
    } else {
      orders = await Order.find().sort({
        createdAt: -1,
      });
    }

    return res.status(200).json({
      status: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
