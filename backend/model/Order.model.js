import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  name: String,
  id: Number,
  number: Number,
  address: String,
  paymentMode: String,
  qty: Number,
  summary: String,
  total: Number,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
